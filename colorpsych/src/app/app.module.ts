import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
<<<<<<< HEAD
=======
import { MaterializeModule }  from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

>>>>>>> aeb95dd1817e220ba51097173f38037f8a3dc7a9

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
<<<<<<< HEAD
=======
    MaterializeModule.forRoot()
>>>>>>> aeb95dd1817e220ba51097173f38037f8a3dc7a9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
