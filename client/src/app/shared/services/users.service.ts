import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable()
export class UsersService {
  constructor(private http: HttpService) {}

  getUserByEmail(email: string): Observable<User> {
    return this.http.createGetQuery(`users?email=${email}`)
    .map((users: User[]) =>
      users[0] ? users[0] : undefined,
    );
  }

  createNewUser(user: User): Observable<User> {
    return this.http.createPost('registration', user);
  }
}
