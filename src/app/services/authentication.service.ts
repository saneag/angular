import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;

  constructor(private router: Router) {}

  register(credentials: User) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = {
      id: users.length + 1,
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);
  }

  login(username: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.email === username && user.password === password
    );
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/']);
    }
    return this.isLoggedIn;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
