import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Http, HttpModule } from '@angular/http';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlertComponent } from './_directives/index';

import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { CreateByAttributeComponent } from './create-by-attribute/create-by-attribute.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';

import { AppRoutingModule } from './app.routing.module';
import { UserRoutingModule } from './user/user-routing/user-routing.module';


// import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    SignupComponent,
    CreateByColorComponent,
    ByColorResultComponent,
    NavigationComponent,
    CreateByAttributeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    FormsModule,
    HttpModule,
    UserModule,
    AppRoutingModule,
    UserRoutingModule
  ],
  providers: [
    // AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }