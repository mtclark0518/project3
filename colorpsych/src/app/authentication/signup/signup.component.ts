import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

signup(email, password): void {
  email = email.trim();
  password = password.trim();

  console.log(email + password);
  }
}
