import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from './_guards/index';


const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-by-color', component: CreateByColorComponent},
  { path: 'by-color-result', component: ByColorResultComponent},
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent},

  // redirect home
  { path: '**', redirectTo: '' },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }), CommonModule ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
