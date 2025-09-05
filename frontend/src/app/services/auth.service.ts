// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private apiUrl = 'http://localhost:5000/api'; // Changed from /api/auth to /api

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  // Login method - uses /api/auth/login
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }

  // Register method - uses /api/users (NOT /api/auth/register)
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user)
      .pipe(
        catchError(error => {
          console.error('Registration error:', error);
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user && user.token;
  }

  getUsername(): string {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.username || '';
  }

  getToken(): string {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.token || '';
  }

  getUserId(): string {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user._id || '';
  }

  getUserEmail(): string {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.email || '';
  }

  // Optional: Method to get user profile from protected endpoint
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/profile`)
      .pipe(
        catchError(error => {
          console.error('Profile fetch error:', error);
          return throwError(() => error);
        })
      );
  }
}