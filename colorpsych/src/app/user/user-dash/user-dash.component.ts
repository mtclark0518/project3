
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../_models/index';

import { UserService } from '../../_services/index';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  logout(): void {
    this.userService.logout();
    console.log('user logged out');
    this.router.navigate(['/login']);
    }

  ngOnInit() {
      this.route.params.forEach( param => {
      this.userService.showByEmail(param.email)

      .subscribe(response => {
        this.currentUser = response.json();
        console.log(this.currentUser.firstName);
      });
    });
  }
}
