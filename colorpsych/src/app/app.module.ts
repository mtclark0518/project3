import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
    path: 'create-by-attribute', component: CreateByAttributeComponent
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
      ),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }