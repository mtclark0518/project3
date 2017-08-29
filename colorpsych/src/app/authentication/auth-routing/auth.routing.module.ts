import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { AuthGuardService } from '../services/auth-guard/auth-guard.service';


const authRoutes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  providers: [AuthGuardService, AuthService],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
