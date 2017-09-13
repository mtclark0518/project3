"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../_services/index");
var UserDashComponent = (function () {
    function UserDashComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UserDashComponent.prototype.logout = function () {
        this.userService.logout();
        console.log('user logged out');
        this.router.navigate(['/login']);
    };
    UserDashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.userService.showByEmail(param.email)
                .subscribe(function (response) {
                _this.currentUser = response.json();
                console.log(_this.currentUser.firstName);
            });
        });
    };
    return UserDashComponent;
}());
UserDashComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-user-dash',
                templateUrl: './user-dash.component.html',
                styleUrls: ['./user-dash.component.scss']
            },] },
];
/** @nocollapse */
UserDashComponent.ctorParameters = function () { return [
    { type: index_1.UserService, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
]; };
exports.UserDashComponent = UserDashComponent;
//# sourceMappingURL=user-dash.component.js.map