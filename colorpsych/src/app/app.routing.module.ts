import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { LandingComponent } from './landing/landing';
const routes: Routes = [
  // { path: ' / ', component: LandingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
