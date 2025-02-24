import { Injectable } from '@angular/core';
import {
  authentication,
  createDirectus,
  createItem,
  createUser,
  deleteItem,
  readItem,
  readItems,
  readMe,
  rest,
  updateItem,
  withOptions,
} from '@directus/sdk';
import { ErrorResponse } from '../interaces/error';
import { Todo } from '../interaces/todo';

@Injectable({
  providedIn: 'root',
})
export class DirectusService {
  private directus;

  constructor() {
    this.directus = createDirectus('http://localhost:8055')
      .with(authentication('session', { credentials: 'include' }))
      .with(rest({ credentials: 'include' }));
  }

  async signUpUser(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) {
    try {
      const result = await this.directus.request(
        createUser({
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        })
      );

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async signInUser(email: string, password: string) {
    try {
      const result = await this.directus.login(email, password);

      if (result && result.expires_at) {
        localStorage.setItem('tokenExpiration', result.expires_at.toString());
      }

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async getUserData() {
    try {
      const result = await this.directus.request(
        withOptions(
          readMe({
            fields: ['id', 'avatar', 'email', 'first_name', 'last_name'],
          }),
          { credentials: 'include' }
        )
      );
      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async signOut() {
    try {
      const result = await this.directus.logout();
      localStorage.removeItem('tokenExpiration');
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  isLoggedIn(): boolean {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (expirationTime) {
      const currentTime = new Date().getTime();
      const tokenExpiration = parseInt(expirationTime);
      return currentTime < tokenExpiration;
    }
    return false;
  }

  async getTodos(isDone?: boolean) {
    try {
      const filter: any = {
        user_created: {
          _eq: '$CURRENT_USER',
        },
      };

      if (isDone !== undefined) {
        filter.isDone = { _eq: isDone };
      } else {
        filter.isDone = { _neq: true };
      }

      const result = await this.directus.request(
        readItems('Todos', {
          fields: ['*'],
          filter: filter,
        })
      );

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async getTodoDetails(id: string) {
    try {
      const result = await this.directus.request(
        readItem('Todos', id, {
          fields: ['*'],
          filter: {
            user_created: {
              _eq: '$CURRENT_USER',
            },
          },
        })
      );

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async createTodo(todo: {
    title: string;
    description: string;
    isImportant: boolean;
    deadline: Date | string;
  }) {
    try {
      const result = await this.directus.request(
        createItem('Todos', {
          Title: todo.title,
          Description: todo.description,
          isImportant: todo.isImportant,
          Deadline: todo.deadline,
        })
      );

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async deleteTodo(todoId: string) {
    try {
      const result = await this.directus.request(deleteItem('Todos', todoId));

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async editTodo(todo: {
    id: string;
    title: string;
    description: string;
    isImportant: boolean;
    deadline: Date | string;
  }) {
    try {
      const result = await this.directus.request(
        updateItem('Todos', todo.id, {
          Title: todo.title,
          Description: todo.description,
          Deadline: todo.deadline,
          isImportant: todo.isImportant,
        })
      );

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }

  async markAsDoneTodo(todoId: string, isDone: boolean) {
    try {
      const isTaskDone = !isDone ? false : true
      const result = await this.directus.request(
        updateItem('Todos', todoId, {
          isDone: isTaskDone,
        })
      );

      return result;
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      throw errorResponse;
    }
  }
}
