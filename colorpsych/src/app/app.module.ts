import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlertComponent } from './_directives/index';
import { UserComponent } from './user/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { CreateByAttributeDismissComponent } from './create-by-attribute-dismiss/create-by-attribute-dismiss.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
// import { ClickOutsideDirective } from './click-outside.directive';

import { AppRoutingModule } from './app.routing.module';

import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ByAttributeService } from './_services/index';
import { CreateByAttributeChooseComponent } from './create-by-attribute-choose/create-by-attribute-choose.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    CreateByColorComponent,
    ByColorResultComponent,
    NavigationComponent,
    CreateByAttributeDismissComponent,
    CreateByAttributeChooseComponent
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
    ByAttributeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }