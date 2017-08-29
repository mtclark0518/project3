import { AuthenticationComponent } from '../authentication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginService } from '../services/login/login.service';


const authRoutes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  providers: [LoginService],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
