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
import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
baseUrl = 'http://localhost:3000';


  login(email: string, password: string) {
    let data = {email: email, password: password};
    console.log(data);
    let myjson = JSON.stringify({email: email, password: password});
    console.log(myjson);
    this.http.post('/api/users/', myjson)
      .map((response: Response) => {
        console.log(response.json());
        const user = response.json();
        console.log(user);
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }
  logout() {
    localStorage.removeItem('currentUser');
  }

constructor ( private http: Http) { }
}
