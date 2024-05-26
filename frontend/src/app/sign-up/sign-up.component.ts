import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DirectusService } from '../directus.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ErrorResponse } from '../../interaces/error';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signUp = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(40),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
    repeat_password: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
  });

  error: string = '';

  constructor(
    private directusService: DirectusService,
    private router: Router
  ) {}

  async onSubmit() {
    if (this.signUp.valid) {
      this.error = '';
      const { email, password, first_name, last_name } = this.signUp.value;
      if (email && password && first_name && last_name) {
        try {
          const result = await this.directusService.signUpUser(
            email,
            password,
            first_name,
            last_name
          );

          await this.router.navigate(['/']);
          await window.location.reload();
        } catch (error) {
          const errorResponse = error as ErrorResponse;
          if (errorResponse.errors) {
            switch (errorResponse.errors[0].message) {
              case 'Value for field "email" in collection "directus_users" has to be unique.':
                this.error =
                  'A user with this email already exists. Please try logging in or use a different email address.';
            }
          }
        }
      }
    } else {
      console.log('Form is invalid');
    }
  }

  resetError() {
    this.error = '';
  }
}
