import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

export const routes: Routes = [
  { path: 'create', component: CreateTodoComponent },
  { path: 'details/:id', component: TodoDetailsComponent },
  { path: 'edit/:id', component: TodoEditComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: TodosListComponent },
  { path: '404', component:  NotFoundComponent},
  { path: '**', redirectTo: '404' }
  ];
