import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Http, HttpModule } from '@angular/http';
import { UserModule } from './user/user.module';

/* INDEX */
import { AlertComponent } from './_directives/index';

import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateByAttributeDismissComponent } from './create-by-attribute-dismiss/create-by-attribute-dismiss.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
// import { ClickOutsideDirective } from './click-outside.directive';

import { AppRoutingModule } from './app.routing.module';
import { UserRoutingModule } from './user/user-routing/user-routing.module';

import { AlertService, AuthenticationService, UserService, ByAttributeService } from './_services/index';
import { CreateByAttributeChooseComponent } from './create-by-attribute-choose/create-by-attribute-choose.component';
// import { AuthGuard } from './_guards/index';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    SignupComponent,
    CreateByColorComponent,
    ByColorResultComponent,
    NavigationComponent,
    CreateByAttributeDismissComponent,
    CreateByAttributeChooseComponent,
    AboutComponent,
    FooterComponent,
    LandingComponent

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
    ByAttributeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }