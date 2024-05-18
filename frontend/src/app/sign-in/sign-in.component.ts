import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DirectusService } from '../directus.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signIn = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  error: string = "";

  constructor(private directusService: DirectusService, private router: Router) {}

  async onSubmit() {
    if (this.signIn.valid) {
      this.error = ""
      const { email, password } = this.signIn.value;
      if (email && password) {
        try {
          const result = await this.directusService.signInUser(
            email,
            password,
          );
          await this.router.navigate(["/"])
          await window.location.reload();

        } catch (error: any) {
          if (error.errors) {
            switch (error.errors[0].message) {
              case 'Invalid user credentials.':
                this.error = "Invalid user credentials.";
              }
          } else {
            this.error = error;
          }
        }
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
