import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// import { LandingComponent } from './landing/landing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';

const routes: Routes = [
  // { path: ' / ', component: LandingComponent }
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'create-by-color', component: CreateByColorComponent
  },
  {
    path: 'by-color-result', component: ByColorResultComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
