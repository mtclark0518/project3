import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { AuthGuard } from './_guards/auth-guard';

// import { LandingComponent } from './landing/landing';

const authRoutes: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'user', component: UserComponent, canActivate: [AuthGuardService] }


  // redirect home
  { path: '**', redirectTo: '' }

];


@NgModule({
  imports: [ RouterModule.forRoot(authRoutes), CommonModule ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
