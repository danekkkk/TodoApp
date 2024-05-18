import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { DirectusService } from '../directus.service';
import { Router } from '@angular/router';
import { ErrorResponse } from '../interaces/error';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signUp = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
  });

  error: string = "";

  constructor(private directusService: DirectusService, private router: Router) {}

  async onSubmit() {
    if (this.signUp.valid) {
      this.error = ""
      const { email, password, first_name, last_name } = this.signUp.value;
      if (email && password && first_name && last_name) {
        try {
          const result = await this.directusService.signUpUser(
            email,
            password,
            first_name,
            last_name
          );

          await this.router.navigate(["/"])
          await window.location.reload();

        } catch (error) {
          const errorResponse = error as ErrorResponse;
          if (errorResponse.errors) {
            switch (errorResponse.errors[0].message) {
              case 'Value for field "email" in collection "directus_users" has to be unique.':
                this.error = "A user with this email already exists. Please try logging in or use a different email address.";
              }
          }
        }
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
