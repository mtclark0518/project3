"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var user_component_1 = require("../user.component");
var user_dash_component_1 = require("../user-dash/user-dash.component");
var index_1 = require("../../_guards/index");
var userRoutes = [
    {
        path: 'users',
        component: user_component_1.UserComponent,
        children: [
            {
                path: '',
                children: [
                    { path: ':email', component: user_dash_component_1.UserDashComponent }
                ]
            }
        ]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    router_1.RouterModule.forChild(userRoutes)
                ],
                providers: [index_1.AuthGuard],
                exports: [
                    router_1.RouterModule
                ]
            },] },
];
/** @nocollapse */
UserRoutingModule.ctorParameters = function () { return []; };
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map