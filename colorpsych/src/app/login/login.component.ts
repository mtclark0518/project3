import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,    
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
  // login() {
  //   this.message = "Logging in . . .";
  //   this.loginService.login().subscribe(() => {
  //     this.setMessage();
  //     if (this.loginService.isLoggedIn) {
  //       let redirect = this.loginService.redirectUrl ?
  //       this.loginService.redirectUrl : '/user';
  //       this.router.navigate([redirect]);
  //     }
  //   });
  // }
  // logout() {
  //   this.loginService.logout();
  //   this.setMessage();
  // }


  // createUser(newUser) {
  //   this.loginService.create(newUser)
  //     .subscribe(response => {
  //       console.log(response.json());
  //       let user = response.json();
  //       window.location.href = '/users/' + user.email;

  //     });
  // }
  // getLogin(email, password): void {
  //   email = email.trim();
  //   password = password.trim();
  //   this.newUser = {
  //     email : this.email,
  //     password : this.password
  //   };
  //   this.createUser(this.newUser);
  // }
  // show(): void {
  //   this.loginService.getAllUsers();
  // }


