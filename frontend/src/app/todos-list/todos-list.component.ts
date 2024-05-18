import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../directus.service';
import { ErrorResponse } from '../interaces/error';
import { Todo } from '../interaces/todo';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent implements OnInit {
  constructor(public directusService: DirectusService) {}

  todos: Todo[] = [];

  async ngOnInit() {
    if (this.directusService.isLoggedIn()) {
      try {
        const result = await this.directusService.getTodos();
        this.todos = result as Todo[];
        console.log(result)
      } catch (error) {
        const errorResponse = error as ErrorResponse;
        console.log(errorResponse.errors[0].message);
      }
    }
  }
}
