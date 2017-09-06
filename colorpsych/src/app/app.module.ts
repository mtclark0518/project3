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
import { CreateByAttributeDismissComponent } from './create-by-attribute-dismiss/create-by-attribute-dismiss.component';
import { CreateByColorComponent } from './create-by-color/create-by-color.component';
import { ByColorResultComponent } from './by-color-result/by-color-result.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app.routing.module';


import { AuthGuard } from './_guards/index';
// import { AuthRequestOptions } from './_models/index';
// import { MyInterceptor } from './_interceptors/index';


import { AuthenticationService, UserService, ByAttributeService } from './_services/index';
import { CreateByAttributeChooseComponent } from './create-by-attribute-choose/create-by-attribute-choose.component';
// import { AuthGuard } from './_guards/index';


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
    HttpClientModule,
    HttpModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    // { provide: AuthRequestOptions,vuseClass: AuthRequestOptions, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
    ByAttributeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

