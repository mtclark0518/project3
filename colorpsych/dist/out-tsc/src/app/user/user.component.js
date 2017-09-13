"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var UserComponent = (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UserComponent.prototype.ngOnInit = function () {
        if (this.currentUser) {
            this.router.navigate(['/users/' + this.currentUser.email]);
        }
    };
    return UserComponent;
}());
UserComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            },] },
];
/** @nocollapse */
UserComponent.ctorParameters = function () { return [
    { type: index_1.UserService, },
    { type: router_1.Router, },
]; };
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map