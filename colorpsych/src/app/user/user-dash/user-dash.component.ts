import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) { }

    ngOnInit() {
    // this.userService.showByEmail(this.model.email);
      this.route.params.forEach( param => {
      this.userService.showByEmail(param.email)

      .subscribe(response => {
        console.log(response.json());

        this.currentUser = response.json()[0];
        console.log(this.currentUser.firstName);
      });
    });
  }

}
