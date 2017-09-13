"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ByAttributeService = (function () {
    function ByAttributeService() {
        // private dismissResults = new Subject<Object[]>();
        // dismissResults$ = this.dismissResults.asObservable();
        this.resultsFromDismiss = [];
    }
    ByAttributeService.prototype.saveDismissResults = function (data) {
        // this.resultsFromDismiss = this.fromDismiss.getUserArray();
        console.log(this.resultsFromDismiss);
        return (this.resultsFromDismiss);
    };
    return ByAttributeService;
}());
// saveDismissResults(data: object[]) {
// this.dismissResults.next(data);
// console.log(data);
// }
ByAttributeService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ByAttributeService.ctorParameters = function () { return []; };
exports.ByAttributeService = ByAttributeService;
//# sourceMappingURL=by-attribute.service.js.map