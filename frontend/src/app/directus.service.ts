import { Injectable } from '@angular/core';
import { authentication, createDirectus, createUser, readMe, rest, withOptions } from '@directus/sdk';


@Injectable({
  providedIn: 'root'
})
export class DirectusService {
  private directus;

  constructor() {
    this.directus = createDirectus("http://localhost:8055")
    .with(authentication('session', { credentials: 'include' }))
    .with(rest({ credentials: 'include' }));
  }

  async signUpUser(email: string, password: string, first_name: string, last_name: string) {
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
      throw error;
    }
  }

  async signInUser(email: string, password: string) {
    try {
      const result = await this.directus.login(email, password);

      if (result && result.expires_at) {
        localStorage.setItem("tokenExpiration", result.expires_at.toString());
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUserData() {
    try {
      const result = await this.directus.request(
        withOptions(
          readMe({
            fields: ["avatar", "email", "first_name", "last_name"],
          }),
          { credentials: "include" }
        )
      );

      return result;
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      const result = await this.directus.logout();
      localStorage.removeItem("tokenExpiration");
    } catch (error) {
      throw error;
    }
  }

  isLoggedIn(): boolean {
    const expirationTime = localStorage.getItem("tokenExpiration");
    if (expirationTime) {
      const currentTime = new Date().getTime();
      const tokenExpiration = parseInt(expirationTime);
      return currentTime < tokenExpiration;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem("tokenExpiration");
  }
}
