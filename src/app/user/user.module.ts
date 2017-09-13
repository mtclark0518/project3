import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './';
import { UserDashComponent } from './user-dash/user-dash.component';
import { User } from '../_models/index';

import { UserRoutingModule } from './user-routing/user-routing.module';
import { AuthGuard } from '../_guards';
import { UserService } from '../_services/index';



@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserDashComponent, UserComponent],
  providers: [ AuthGuard, UserService ]
})
export class UserModule { }
