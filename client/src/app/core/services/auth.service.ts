import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/registration', user);
  }

  login(user: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', user).pipe(
      tap(({ token }) => {
        localStorage.setItem('auth-token', token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth-token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth-token');
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.replace('Bearer ', '').split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  getDecodedToken(): { name: string; userId: string } | null {
    const token = localStorage.getItem('auth-token');
    if (!token) return null;
    try {
      return JSON.parse(atob(token.replace('Bearer ', '').split('.')[1]));
    } catch {
      return null;
    }
  }
}
