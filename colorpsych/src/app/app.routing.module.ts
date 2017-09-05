import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
// import { AuthGuard } from './_guards/index';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  // canActivate: [AuthGuard]

  { path: 'signup', component: SignupComponent },
  { path: 'create-by-color', component: CreateByColorComponent},
  { path: 'by-color-result', component: ByColorResultComponent},
  { path: 'about', component: AboutComponent },
  // { path: 'footer', component: FooterComponent},
  // { path: 'landing', component: LandingComponent},

  // redirect home
  { path: '**', redirectTo: '' },

];



@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }


