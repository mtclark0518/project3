import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/index';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { CreateByAttributeComponent } from './create-by-attribute/create-by-attribute.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app.routing.module';


import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AuthRequestOptions } from './_models/index';
import { MyInterceptor } from './_interceptors/index';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    SignupComponent,
    CreateByColorComponent,
    ByColorResultComponent,
    NavigationComponent,
    CreateByAttributeComponent,
    AboutComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    FormsModule,
    HttpClientModule,
    HttpModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    AuthGuard,
    UserService,
    // { provide: AuthRequestOptions,vuseClass: AuthRequestOptions, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

