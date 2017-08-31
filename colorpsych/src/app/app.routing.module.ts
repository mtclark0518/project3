import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
import { CreateByAttributeDismissComponent } from './create-by-attribute-dismiss/create-by-attribute-dismiss.component';
import { CreateByAttributeChooseComponent } from './create-by-attribute-choose/create-by-attribute-choose.component';

import { AuthGuard } from './_guards/index';


const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-by-color', component: CreateByColorComponent},
  {
  	path: 'create-by-attribute-dismiss', component: CreateByAttributeDismissComponent
  },
  { path: 'create-by-attribute-choose', component: CreateByAttributeChooseComponent },
  { path: 'by-color-result', component: ByColorResultComponent },
  // redirect home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }), CommonModule ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
