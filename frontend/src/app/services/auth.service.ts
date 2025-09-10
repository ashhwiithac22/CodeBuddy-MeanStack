import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    // MOCK LOGIN - Replace with real API when backend is ready
    return of({
      token: 'mock-jwt-token-' + Math.random().toString(36).substr(2),
      user: {
        id: '1',
        username: username,
        email: username + '@example.com',
        createdAt: new Date()
      }
    }).pipe(
      delay(1000),
      map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  register(userData: any) {
    // MOCK REGISTRATION
    return of({
      message: 'User registered successfully',
      user: {
        id: '2',
        username: userData.username,
        email: userData.email
      }
    }).pipe(delay(1000));
  }

  logout() {
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
    return user.username || 'Guest';
  }

  getToken(): string {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.token || '';
  }
}
