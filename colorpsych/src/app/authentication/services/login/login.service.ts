// tslint:disable:import-spacing

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// observables
import 'rxjs/add/observable/of';
// operators
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


  @Injectable()
export class LoginService {

  constructor ( private http: Http ) { }

  baseUrl = 'http://localhost:3000';
  isLoggedIn = false;
  redirectUrl: string;
  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
  this.isLoggedIn = false;
  }
  getAllUsers() {
  return this.http.get(`${this.baseUrl}/api/users`);
  }

  create(newUser) {
  return this.http.post(`${this.baseUrl}/api/users/`, newUser);

  }
}
