import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    public router: Router,
    public authGuardService: AuthGuardService
  ) { }

  ngOnInit() {
  }

}
