import { UserComponent } from '../user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, UserService } from '../_services/index';
import { AuthGuard } from '../_guards';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  userLoggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private authGuard: AuthGuard
  ) {}

  ngOnInit() {
    // reset login status
    this.logout();
  }
  logout() {
    this.userService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.userService.login(this.model).subscribe(data => {
      const user = data.json();
      console.log(user);
      const currentUser = JSON.stringify(user);
      localStorage.setItem('currentUser', currentUser);
      console.log(localStorage.getItem('currentUser'));
      console.log('ok you got it buddy');
      this.router.navigate(['/users']);
    });
  }
}





