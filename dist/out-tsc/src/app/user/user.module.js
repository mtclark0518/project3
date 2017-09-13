"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var _1 = require("./");
var user_dash_component_1 = require("./user-dash/user-dash.component");
var user_routing_module_1 = require("./user-routing/user-routing.module");
var _guards_1 = require("../_guards");
var index_1 = require("../_services/index");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    user_routing_module_1.UserRoutingModule
                ],
                declarations: [user_dash_component_1.UserDashComponent, _1.UserComponent],
                providers: [_guards_1.AuthGuard, index_1.UserService]
            },] },
];
/** @nocollapse */
UserModule.ctorParameters = function () { return []; };
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map