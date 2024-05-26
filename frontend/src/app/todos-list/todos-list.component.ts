import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../directus.service';
import { ErrorResponse } from '../../interaces/error';
import { Todo } from '../../interaces/todo';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  today: string;
  todos: Todo[] = [];
  incompletedTodos: Todo[] = [];
  todayTodos: Todo[] = [];
  incomingTodos: Todo[] = [];

  constructor(public directusService: DirectusService, private router: Router) {
    this.today = new Date().toISOString().split('T')[0];
  }

  async ngOnInit() {
    if (this.directusService.isLoggedIn()) {
      try {
        const result = await this.directusService.getTodos();
        this.todos = result as Todo[];

        this.filterTodosByDeadline();
      } catch (error) {
        const errorResponse = error as ErrorResponse;
        console.log(errorResponse.errors[0].message);
      }
    }
  }

  filterTodosByDeadline() {
    this.todos.forEach((todo) => {
      if (todo.Deadline < this.today) {
        this.incompletedTodos.push(todo);
      } else if (todo.Deadline === this.today) {
        this.todayTodos.push(todo);
      } else {
        this.incomingTodos.push(todo);
      }
    });
  }

  todoDetails(todo: Todo): void {
    this.router.navigate(['details', todo.id]);
  }
}
