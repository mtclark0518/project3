import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './';
import { UserDashComponent } from './user-dash/user-dash.component';

import { UserRoutingModule } from './user-routing/user-routing.module';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserDashComponent, UserComponent]
})
export class UserModule { }
