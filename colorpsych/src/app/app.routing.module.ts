import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { LandingComponent } from './landing/landing';
const appRoutes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes), CommonModule ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
