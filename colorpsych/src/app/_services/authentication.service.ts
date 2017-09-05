// tslint:disable:import-spacing

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// observables
import 'rxjs/add/observable/of';
// operators
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { User } from '../_models/index';

export const TOKEN_NAME = 'jwt_token';

@Injectable()

export class AuthenticationService {

userLoggedIn = false;
baseUrl = 'http://localhost:3000';

// private url: string = 'api/auth';
// private headers = new Headers({ 'Content-Type' : 'application/json'});

constructor ( private http: Http) { }

redirectUrl: string;
  // getToken(): string {
  //   return localStorage.getItem(TOKEN_NAME);
  // }

  // setToken(token: string): void {
  //   localStorage.setItem(TOKEN_NAME, token);
  // }

  // getTokenExpirationDate(token: string): Date {
  //   const decoded = jwt_decode(token);
  //   if (decoded.exp === undefined) {
  //     return null;
  //   }
  //   const date = new Date(0);
  //   date.setUTCSeconds(decoded.exp);
  //   return date;
  // }

  // isTokenExpired(token?: string): boolean {
  //   if (!token) {
  //     token = this.getToken();
  //   }
  //   if (!token) {
  //     return true;
  //   }
  //   const date = this.getTokenExpirationDate(token);
  //   if (date === undefined) {return false; }
  //   return !(date.valueOf() > new Date().valueOf());
  // }

  // login(user): Promise<string> {
  //   return this.http
    // .post(`${this.url}/login`, JSON.stringify(user), {httpheaders: this.headers})
    // .toPromise()
    // .then(res => res.text());
  // }
  isValidUser() {
     return true;
    }

  login(email: string, password: string) {
    const myjson = JSON.stringify({email: email, password: password});
    console.log(myjson);
    this.http.post('/api/users/', myjson)
      .map((response: Response) => {
        console.log(response.json());
        const user = response.json();
        console.log(user);
        // if (user && user.token)
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userLoggedIn = true;
        console.log(localStorage.getItem('currentUser'));
        console.log("heyyy fuck you this is where i show up");
        return this.userLoggedIn;
      });
  }
  logout() {
    localStorage.removeItem('currentUser');
  }

}



