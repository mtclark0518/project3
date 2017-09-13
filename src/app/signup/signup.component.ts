import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/index';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

register() {
    this.loading = true;
    this.userService.create(this.model).subscribe(data => {
      const user = data.json();
      console.log(user);
      const currentUser = JSON.stringify(user)
      localStorage.setItem('currentUser', currentUser);
      console.log(localStorage.getItem('currentUser'))    
      this.router.navigate(['/users']);
        },
        error => {
          this.loading = false;
          return console.log('error: ' + error );
        });
  }
}



