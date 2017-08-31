import { UserComponent } from '../user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, UserService } from '../_services/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    // reset login status
    this.logout();
  }
  logout() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    this.loading = true;
    console.log(this.returnUrl);
    this.userService.getAll()
    .subscribe( data => {
      this.router.navigate(['/user']);
    },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    // this.authenticationService.login(this.model.email, this.model.password);
    // this.router.navigate(['/user']);
    // this.router.navigate([this.returnUrl]);
    // subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
        // error => {
        //   this.alertService.error(error);
        //   this.loading = false;
        // });
  }
}


