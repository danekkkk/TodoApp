import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DirectusService } from '../directus.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ErrorResponse } from '../../interaces/error';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  signIn = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(40),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
  });

  error: string = '';

  constructor(
    private directusService: DirectusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.directusService.isLoggedIn()) this.router.navigate(['']);
  }

  async onSubmit() {
    if (this.signIn.valid) {
      this.error = '';
      const { email, password } = this.signIn.value;
      if (email && password) {
        try {
          const result = await this.directusService.signInUser(email, password);
          await this.router.navigate(['/']);
          await window.location.reload();
        } catch (error) {
          const errorResponse = error as ErrorResponse;
          if (errorResponse.errors) {
            switch (errorResponse.errors[0].message) {
              case 'Invalid user credentials.':
                this.error = 'Invalid user credentials.';
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
