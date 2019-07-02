import { HttpService } from './http.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  constructor(private http: HttpService) {}

  login(user: User): Observable<{ token: string }> {
    return this.http.createPost('login', user).pipe(
      tap(({ token }) => {
        window.localStorage.setItem('auth-token', token);
        this.isAuthenticated = true;
      }),
    );
  }

  logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
