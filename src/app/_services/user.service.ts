import { HttpClient } from '@angular/common/http/';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// observables
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// operators
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { User } from '../_models/index';


@Injectable()
export class UserService {

  baseUrl = 'http://localhost:3000';
  constructor(private http: Http) { }


// INDEX all users
  getAll() {
    return this.http.get(`${this.baseUrl}/api/users`);
    // return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

// SHOW one user by email
  showByEmail(email: string) {
    console.log(email);
    return this.http.get(`${this.baseUrl}/api/users/${email}`);
    // return this.http.get('/api/users' + id, this.jwt()).map((response: Response) => response.json());
  }

// CREATE a new user
  create(user: User) {
    console.log(user);
    return this.http.post(`${this.baseUrl}/api/users/`, user);
    // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }
// POST a login attempt
  login(user: User) {
    console.log(user);
    return this.http.post(`${this.baseUrl}/api/login/`, user);
  }

// LOGOUT
  logout(): void {
    console.log(localStorage.getItem('currentUser'));
    localStorage.removeItem('currentUser');
  }

}
