import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../directus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Todo } from '../interaces/todo';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {
  constructor(public directusService: DirectusService, private router: Router, private route: ActivatedRoute) {}

  todoId: string = "";
  todoDetails: Todo | null = null;

  ngOnInit(): void {
    if (!this.directusService.isLoggedIn()) this.router.navigate(["/"]);
      this.route.params.subscribe(params => {
        this.todoId = params['id'];
      });
      this.getTodoDetails(this.todoId);
  }

  private async getTodoDetails(id: string) {
    try {
      const result = await this.directusService.getTodoDetails(id);
      this.todoDetails = result as Todo;
    } catch (error) {
      this.router.navigate(["404"]);
    }
  }
}
