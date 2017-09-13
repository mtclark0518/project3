"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/observable/of");
// operators
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    // INDEX all users
    UserService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/api/users");
        // return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    };
    // SHOW one user by email
    UserService.prototype.showByEmail = function (email) {
        console.log(email);
        return this.http.get(this.baseUrl + "/api/users/" + email);
        // return this.http.get('/api/users' + id, this.jwt()).map((response: Response) => response.json());
    };
    // CREATE a new user
    UserService.prototype.create = function (user) {
        console.log(user);
        return this.http.post(this.baseUrl + "/api/users/", user);
        // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    };
    // POST a login attempt
    UserService.prototype.login = function (user) {
        console.log(user);
        return this.http.post(this.baseUrl + "/api/login/", user);
    };
    // LOGOUT
    UserService.prototype.logout = function () {
        console.log(localStorage.getItem('currentUser'));
        localStorage.removeItem('currentUser');
    };
    return UserService;
}());
UserService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
UserService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map