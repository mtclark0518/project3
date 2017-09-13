"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, userService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        // this.logout();
    };
    LoginComponent.prototype.logout = function () {
        this.userService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.userService.login(this.model).subscribe(function (data) {
            var user = data.json();
            console.log(user);
            var currentUser = JSON.stringify(user);
            localStorage.setItem('currentUser', currentUser);
            console.log(localStorage.getItem('currentUser'));
            console.log('ok you got it buddy');
            _this.router.navigate(['/users']);
        });
    };
    return LoginComponent;
}());
LoginComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
    { type: index_1.AuthenticationService, },
    { type: index_1.UserService, },
]; };
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map