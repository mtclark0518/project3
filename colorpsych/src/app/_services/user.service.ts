import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// observables
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

  getAll() {

    return this.http.get(`${this.baseUrl}/api/users`);
    // return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  showByEmail(email: string) {
    console.log(email);
    return this.http.get(`${this.baseUrl}/api/users/${email}`);

    // return this.http.get('/api/users' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    console.log(user);
    return this.http.post(`${this.baseUrl}/api/users/`, user);

    // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  // update(user: User) {
  //   return
  // }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());

  }

 
  // HELPER METHODS

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({headers: headers});
    }
  }
}
