import { Component } from '@angular/core';
import { DirectusService } from '../directus.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserData } from '../interaces/userData';
import { ErrorResponse } from '../interaces/error';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private directusService: DirectusService, private router: Router) {}

  userData: UserData | null = null;

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  async logOut() {
    try {
      const result = await this.directusService.signOut();
      this.userData = null;
      this.router.navigate(['sign-in']);
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      console.log(errorResponse.errors[0]);
    }
  }

  async checkLoginStatus() {
    if (this.directusService.isLoggedIn()) {
      try {
        const result = await this.directusService.getUserData();
        this.userData = result as UserData;
      } catch (error) {
        const errorResponse = error as ErrorResponse;
        console.log(errorResponse.errors[0].message)
      }
    }
  }
}
