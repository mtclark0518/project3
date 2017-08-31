import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user.component';
import { UserDashComponent } from '../user-dash/user-dash.component';

const userRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path: ':email',
        component: UserDashComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)

  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
