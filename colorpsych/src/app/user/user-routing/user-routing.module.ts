import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user.component';
import { UserDashComponent } from '../user-dash/user-dash.component';
import { AuthGuard } from '../../_guards/index';


const userRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: ':email', component: UserDashComponent }
        ]
      }
    ]
  }
];





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)

  ],
  providers: [AuthGuard],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
