import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { MaterializeModule }  from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';


import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
