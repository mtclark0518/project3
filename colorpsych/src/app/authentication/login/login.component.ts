import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  newUser = <any>{};
  email: string;
  password: string;
  message: string;

  constructor(
    private http: HttpClient,
    public loginService: LoginService,
    public router: Router,
  ) { this.setMessage(); }

  setMessage() {
    this.message = 'Logged' + (this.loginService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    this.message = "Logging in . . .";
    this.loginService.login().subscribe(() => {
      this.setMessage();
      if (this.loginService.isLoggedIn) {
        let redirect = this.loginService.redirectUrl ?
        this.loginService.redirectUrl : '/user';
        this.router.navigate([redirect]);
      }
    });
  }
  logout() {
    this.loginService.logout();
    this.setMessage();
  }

  ngOnInit() {

  }
  createUser(newUser) {
    this.loginService.create(newUser)
      .subscribe(response => {
        console.log(response.json());
        let user = response.json();
        window.location.href = '/users/' + user.email;

      });
  }
  getLogin(email, password): void {
    email = email.trim();
    password = password.trim();
    this.newUser = {
      email : this.email,
      password : this.password
    };
    this.createUser(this.newUser);
  }
  show(): void {
    this.loginService.getAllUsers();
  }

}
