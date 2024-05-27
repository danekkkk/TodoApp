import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../directus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../interaces/todo';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorResponse } from '../../interaces/error';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css',
})
export class TodoEditComponent implements OnInit {
  constructor(
    public directusService: DirectusService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  today: string;
  todoId: string = '';
  todoDetails: Todo | null = null;
  error: string = '';

  editTodo = new FormGroup({
    details: new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      isImportant: new FormControl(false),
    }),
    deadline: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (!this.directusService.isLoggedIn()) this.router.navigate(['/']);
    this.route.params.subscribe((params) => {
      this.todoId = params['id'];
      this.getTodoDetails(this.todoId);
    });
  }

  private async getTodoDetails(id: string) {
    try {
      const result = await this.directusService.getTodoDetails(id);
      this.todoDetails = result as Todo;
      this.editTodo.patchValue({
        details: {
          title: this.todoDetails.Title,
          description: this.todoDetails.Description,
          isImportant: this.todoDetails.isImportant,
        },
        deadline: this.todoDetails.Deadline,
      });
    } catch (error) {
      this.router.navigate(['404']);
    }
  }

  get title() {
    return this.editTodo.get('details.title');
  }
  get description() {
    return this.editTodo.get('details.description');
  }
  get isImportant() {
    return this.editTodo.get('details.isImportant');
  }
  get deadline() {
    return this.editTodo.get('deadline');
  }

  async onSubmit(): Promise<void> {
    const deadlineDate = new Date(this.deadline?.value ?? '');
    const todayDate = new Date(this.today);

    if (deadlineDate < todayDate) {
      this.error = 'The deadline must be today or in the future.';
      return;
    }

    try {
      const result = await this.directusService.editTodo({
        id: this.todoId,
        title: this.title?.value ?? '',
        description: this.description?.value ?? '',
        isImportant: this.isImportant?.value ?? false,
        deadline: this.deadline?.value ?? '',
      });

      await this.router.navigate(['details', this.todoId]);
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      if (errorResponse.errors) {
        this.error =
          'An error occurred while saving your task. Please try again.';
      }
    }
  }

  resetError() {
    this.error = '';
  }
}
