// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInValue = true;

  isLoggedIn() {
    return this.isLoggedInValue;
  }

  login() {
    // Implement your login logic here
    this.isLoggedInValue = true;
  }

  logout() {
    // Implement your logout logic here
    this.isLoggedInValue = false;
  }
}
