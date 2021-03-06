import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators/tap';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from './http.service';

@Injectable()
export class AuthService {
  private isAuthenticated = true;
  token: string;
  helper = new JwtHelperService();

  constructor(private http: HttpService) {}

  createNewUser(user: User): Observable<User> {
    return this.http.createPost('registration', user);
  }

  login(user: User): Observable<{ token: string }> {
    return this.http.createPost('login', user).pipe(
      tap(({ token }) => {
        window.localStorage.setItem('auth-token', token);
        this.token = token;
      }),
    );
  }

  logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    const isExpired = this.helper.isTokenExpired(this.token);
    if (!isExpired) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  getDecodedAccessToken(token: string): any {
    try {
      const helper = new JwtHelperService();
      return helper.decodeToken(token);
    } catch (Error) {
      return null;
    }
  }

  getToken() {
    return this.token;
  }
}
