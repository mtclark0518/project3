"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var user_module_1 = require("./user/user.module");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var index_1 = require("./_directives/index");
var index_2 = require("./login/index");
var index_3 = require("./signup/index");
var navigation_component_1 = require("./navigation/navigation.component");
var landing_component_1 = require("./landing/landing.component");
var create_by_attribute_dismiss_component_1 = require("./create-by-attribute-dismiss/create-by-attribute-dismiss.component");
var create_by_color_component_1 = require("./create-by-color/create-by-color.component");
var by_color_result_component_1 = require("./by-color-result/by-color-result.component");
var about_component_1 = require("./about/about.component");
var footer_component_1 = require("./footer/footer.component");
var app_routing_module_1 = require("./app.routing.module");
var index_4 = require("./_guards/index");
// import { AuthRequestOptions } from './_models/index';
// import { MyInterceptor } from './_interceptors/index';
var index_5 = require("./_services/index");
var create_by_attribute_choose_component_1 = require("./create-by-attribute-choose/create-by-attribute-choose.component");
// import { AuthGuard } from './_guards/index';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    app_component_1.AppComponent,
                    index_1.AlertComponent,
                    index_2.LoginComponent,
                    index_3.SignupComponent,
                    create_by_color_component_1.CreateByColorComponent,
                    by_color_result_component_1.ByColorResultComponent,
                    navigation_component_1.NavigationComponent,
                    create_by_attribute_dismiss_component_1.CreateByAttributeDismissComponent,
                    create_by_attribute_choose_component_1.CreateByAttributeChooseComponent,
                    about_component_1.AboutComponent,
                    footer_component_1.FooterComponent,
                    landing_component_1.LandingComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'colorpsych' }),
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    http_2.HttpModule,
                    user_module_1.UserModule,
                    app_routing_module_1.AppRoutingModule,
                ],
                providers: [
                    index_4.AuthGuard,
                    index_5.AuthenticationService,
                    index_5.UserService,
                    // { provide: AuthRequestOptions,vuseClass: AuthRequestOptions, multi: true},
                    // {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
                    index_5.ByAttributeService
                ],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map