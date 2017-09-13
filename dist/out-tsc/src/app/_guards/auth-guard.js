"use strict";
// tslint:disable:import-spacing
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var AuthGuard = (function () {
    function AuthGuard(router, authenticationService, alertService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return true;
        // this.authenticationService.isValidUser();
    };
    return AuthGuard;
}());
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
// canActivateChild(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot):
//   boolean {
//     return this.canActivate(route, state);
//   }
// if (!this.authenticationService.isTokenExpired()) {
//     return true;
// this.router.navigate(['/login']);
// if (localStorage.getItem('currentUser')) {
//     return true;
//   }
// this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
// return false;
AuthGuard.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthGuard.ctorParameters = function () { return [
    { type: router_1.Router, },
    { type: index_1.AuthenticationService, },
    { type: index_1.AlertService, },
    { type: index_1.UserService, },
]; };
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.js.map