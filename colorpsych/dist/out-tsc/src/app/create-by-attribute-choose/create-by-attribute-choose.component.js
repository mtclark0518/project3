"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var by_attribute_service_1 = require("../_services/by-attribute.service");
var CreateByAttributeChooseComponent = (function () {
    function CreateByAttributeChooseComponent(byAttribute) {
        this.byAttribute = byAttribute;
        this.dismissResults = this.byAttribute.resultsFromDismiss.slice(0);
        console.log(this.byAttribute.resultsFromDismiss);
    }
    CreateByAttributeChooseComponent.prototype.ngOnInit = function () {
        //  this.byAttribute.dismissResults$.subscribe( data => {
        // console.log('Received data from dismiss component' + data);
        // this.dismissResults = data;
        //  console.log(this.dismissResults);
        // });
    };
    return CreateByAttributeChooseComponent;
}());
CreateByAttributeChooseComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-create-by-attribute-choose',
                templateUrl: './create-by-attribute-choose.component.html',
                styleUrls: ['./create-by-attribute-choose.component.scss']
            },] },
];
/** @nocollapse */
CreateByAttributeChooseComponent.ctorParameters = function () { return [
    { type: by_attribute_service_1.ByAttributeService, },
]; };
exports.CreateByAttributeChooseComponent = CreateByAttributeChooseComponent;
//# sourceMappingURL=create-by-attribute-choose.component.js.map