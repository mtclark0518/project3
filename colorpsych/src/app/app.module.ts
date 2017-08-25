import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CreateByColorComponent } from './src/app/create-by-color/create-by-color.component';
import { ByColorResultComponent } from './src/app/by-color-result/by-color-result.component';
import { LoginComponent } from './src/app/login/login.component';
import { SignupComponent } from './src/app/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateByColorComponent,
    ByColorResultComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
