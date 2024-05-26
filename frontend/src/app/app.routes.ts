import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'create', component: CreateTodoComponent},
    { path: 'details/:id', component: TodoDetailsComponent},
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: '', component: TodosListComponent },
    { path: '**', component: PageNotFoundComponent },
    { path: '404', component: PageNotFoundComponent },


  ];
