import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';

import { AuthRoutingModule } from './auth-routing/auth.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent, AuthenticationComponent],
  exports: [],
  providers: [AuthService, AuthGuardService]
})
export class AuthenticationModule { }
