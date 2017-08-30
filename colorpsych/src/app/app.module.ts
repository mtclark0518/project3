import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';

import { AlertService, AuthenticationService, UserService } from './_services/index';
  
import { UserComponent } from './user/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
