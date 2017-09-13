"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var SignupComponent = (function () {
    function SignupComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    SignupComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model).subscribe(function (data) {
            var user = data.json();
            console.log(user);
            var currentUser = JSON.stringify(user);
            localStorage.setItem('currentUser', currentUser);
            console.log(localStorage.getItem('currentUser'));
            _this.router.navigate(['/users']);
        }, function (error) {
            _this.loading = false;
            return console.log('error: ' + error);
        });
    };
    return SignupComponent;
}());
SignupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            },] },
];
/** @nocollapse */
SignupComponent.ctorParameters = function () { return [
    { type: router_1.Router, },
    { type: index_1.UserService, },
]; };
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map