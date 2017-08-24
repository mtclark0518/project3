import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { MaterializeModule }  from 'angular2-materialize';

import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'colorpsych'}),
    HttpModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
