"use strict";
// tslint:disable:no-trailing-whitespace
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.navExpanded = false;
    }
    NavigationComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    NavigationComponent.prototype.toggleNav = function () {
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            },] },
];
/** @nocollapse */
NavigationComponent.ctorParameters = function () { return []; };
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map