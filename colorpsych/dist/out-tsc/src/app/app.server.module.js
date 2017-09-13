"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    platform_server_1.ServerModule,
                    app_module_1.AppModule,
                ],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppServerModule.ctorParameters = function () { return []; };
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map