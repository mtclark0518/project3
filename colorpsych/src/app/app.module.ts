import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/* INDEX */
import { AlertComponent } from './_directives/index';
import { UserComponent } from './user/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateByAttributeComponent } from './create-by-attribute/create-by-attribute.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
// import { ClickOutsideDirective } from './click-outside.directive';

import { AppRoutingModule } from './app.routing.module';

import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LandingComponent } from './landing/landing.component';


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
    // ClickOutsideDirective,
    CreateByAttributeComponent,
    AboutComponent,
    FooterComponent,
    LandingComponent
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