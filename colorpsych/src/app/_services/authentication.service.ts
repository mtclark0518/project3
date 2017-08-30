// tslint:disable:import-spacing

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// observables
import 'rxjs/add/observable/of';
// operators
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

  @Injectable()
export class AuthenticationService {

  constructor ( private http: Http ) { }


  login(email: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({email: email, password: password}))
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }
  
  logout() {
    localStorage.removeItem('currentUser');
  }
}

  // baseUrl = 'http://localhost:3000';
  // isLoggedIn = false;
  // redirectUrl: string;
  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  // }

  // logout(): void {
  // this.isLoggedIn = false;
  // }
  // getAllUsers() {
  // return this.http.get(`${this.baseUrl}/api/users`);
  // }

  // create(newUser) {
  // return this.http.post(`${this.baseUrl}/api/users/`, newUser);

  // }

