"use strict";
// tslint:disable:import-spacing
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// observables
require("rxjs/add/observable/of");
// operators
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
exports.TOKEN_NAME = 'jwt_token';
var AuthenticationService = (function () {
    // private url: string = 'api/auth';
    // private headers = new Headers({ 'Content-Type' : 'application/json'});
    function AuthenticationService(http) {
        this.http = http;
        this.userLoggedIn = false;
        this.baseUrl = 'http://localhost:3000';
    }
    // getToken(): string {
    //   return localStorage.getItem(TOKEN_NAME);
    // }
    // setToken(token: string): void {
    //   localStorage.setItem(TOKEN_NAME, token);
    // }
    // getTokenExpirationDate(token: string): Date {
    //   const decoded = jwt_decode(token);
    //   if (decoded.exp === undefined) {
    //     return null;
    //   }
    //   const date = new Date(0);
    //   date.setUTCSeconds(decoded.exp);
    //   return date;
    // }
    // isTokenExpired(token?: string): boolean {
    //   if (!token) {
    //     token = this.getToken();
    //   }
    //   if (!token) {
    //     return true;
    //   }
    //   const date = this.getTokenExpirationDate(token);
    //   if (date === undefined) {return false; }
    //   return !(date.valueOf() > new Date().valueOf());
    // }
    // login(user): Promise<string> {
    //   return this.http
    // .post(`${this.url}/login`, JSON.stringify(user), {httpheaders: this.headers})
    // .toPromise()
    // .then(res => res.text());
    // }
    AuthenticationService.prototype.isValidUser = function () {
        return true;
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var myjson = JSON.stringify({ email: email, password: password });
        console.log(myjson);
        this.http.post('/api/users/', myjson)
            .map(function (response) {
            console.log(response.json());
            var user = response.json();
            console.log(user);
            // if (user && user.token)
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.userLoggedIn = true;
            console.log(localStorage.getItem('currentUser'));
            return _this.userLoggedIn;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthenticationService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map