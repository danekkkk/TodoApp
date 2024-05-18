import { Component } from '@angular/core';
import { DirectusService } from '../directus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private directusService: DirectusService) {}

  userData: any = null;

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  async logOut() {
    try {
      const result = await this.directusService.signOut();
      this.userData = null;

    } catch (error: any) {
      console.log(error.errors[0].message)
    }
  }

  async checkLoginStatus() {
    if (this.directusService.isLoggedIn()) {
      try {
        const result = await this.directusService.getUserData();
        this.userData = result;
      } catch (error: any) {
        console.log(error.errors[0].message)
      }
    }
  }
}
