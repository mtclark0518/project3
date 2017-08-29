import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AppRoutingModule } from './app.routing.module';
import { ClickOutsideDirective } from './click-outside.directive';
import { CreateByAttributeComponent } from './create-by-attribute/create-by-attribute.component';


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
  declarations: [
    AppComponent,
    CreateByColorComponent,
    ByColorResultComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    ClickOutsideDirective,
    CreateByAttributeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
