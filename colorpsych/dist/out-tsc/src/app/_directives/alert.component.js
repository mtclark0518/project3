"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alert_service_1 = require("../_services/alert.service");
var AlertComponent = (function () {
    function AlertComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        this.subscription = alertService.getMessage().subscribe(function (message) { _this.message = message; });
    }
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AlertComponent;
}());
AlertComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            },] },
];
/** @nocollapse */
AlertComponent.ctorParameters = function () { return [
    { type: alert_service_1.AlertService, },
]; };
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map