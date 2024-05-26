import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../directus.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorResponse } from '../interaces/error';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css',
})
export class CreateTodoComponent implements OnInit {
  constructor(public directusService: DirectusService, private router: Router) {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  today: string;
  error: string = '';

  ngOnInit(): void {
    if (!this.directusService.isLoggedIn()) {
      this.router.navigate(['/sign-in']);
    }
  }

  createTodo = new FormGroup({
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
    deadline: new FormControl("", [Validators.required]),
  });

  get title() {
    return this.createTodo.get('details.title');
  }
  get description() {
    return this.createTodo.get('details.description');
  }
  get isImportant() {
    return this.createTodo.get('details.isImportant');
  }
  get deadline() {
    return this.createTodo.get('deadline');
  }

  async onSubmit(): Promise<void> {
    try {
      const result = await this.directusService.createTodo({
        title: this.title?.value ?? '',
        description: this.description?.value ?? '',
        isImportant: this.isImportant?.value ?? false,
        deadline: this.deadline?.value ?? "",
      });

      await this.router.navigate(['/']);
      await window.location.reload();
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
