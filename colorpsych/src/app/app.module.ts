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
import { CreateByAttributeComponent } from './create-by-attribute/create-by-attribute.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
// import { ClickOutsideDirective } from './click-outside.directive';

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

    // ClickOutsideDirective,
    CreateByAttributeComponent,
    AboutComponent,
    FooterComponent
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