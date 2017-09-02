// tslint:disable:import-spacing

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthenticationService, AlertService, UserService } from '../_services/index';
import { User, AuthRequestOptions } from '../_models/index';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  user: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean {
    return this.authenticationService.isValidUser();

    }



        // if (data) {
        //   console.log('ERROR: no user found');
        //   let redirect = this.authenticationService.redirectUrl = '/login';
        //   this.router.navigate([redirect]);
        //   return false;
        // }



    // const url: string = state.url;
    // return this.checkLogin(url);


  // checkLogin(url: string): boolean {
  //   if ( this.authenticationService.userLoggedIn ) { return true; }

  //   this.authenticationService.redirectUrl = url;
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean {
      return this.canActivate(route, state);
    }



    // if (!this.authenticationService.isTokenExpired()) {
    //     return true;
    // this.router.navigate(['/login']);

    // if (localStorage.getItem('currentUser')) {
    //     return true;
    //   }
    // this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    // return false;
}
