"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./signup/index");
var create_by_color_component_1 = require("./create-by-color/create-by-color.component");
var by_color_result_component_1 = require("./by-color-result/by-color-result.component");
var create_by_attribute_dismiss_component_1 = require("./create-by-attribute-dismiss/create-by-attribute-dismiss.component");
var create_by_attribute_choose_component_1 = require("./create-by-attribute-choose/create-by-attribute-choose.component");
var about_component_1 = require("./about/about.component");
var landing_component_1 = require("./landing/landing.component");
// import { AuthGuard } from './_guards/index';
var routes = [
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'login', component: index_1.LoginComponent },
    // canActivate: [AuthGuard]
    { path: 'signup', component: index_2.SignupComponent },
    { path: 'create-by-color', component: create_by_color_component_1.CreateByColorComponent },
    { path: 'create-by-attribute-dismiss', component: create_by_attribute_dismiss_component_1.CreateByAttributeDismissComponent },
    { path: 'create-by-attribute-choose', component: create_by_attribute_choose_component_1.CreateByAttributeChooseComponent },
    { path: 'by-color-result', component: by_color_result_component_1.ByColorResultComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    // { path: 'footer', component: FooterComponent},
    // { path: 'landing', component: LandingComponent},
    // redirect home
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [router_1.RouterModule.forRoot(routes), common_1.CommonModule],
                exports: [router_1.RouterModule]
            },] },
];
/** @nocollapse */
AppRoutingModule.ctorParameters = function () { return []; };
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map