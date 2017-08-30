import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AuthRoutingModule } from './authentication/auth-routing/auth.routing.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AuthRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
