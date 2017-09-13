"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var create_by_attribute_dismiss_component_1 = require("./create-by-attribute-dismiss.component");
describe('CreateByAttributeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [create_by_attribute_dismiss_component_1.CreateByAttributeDismissComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(create_by_attribute_dismiss_component_1.CreateByAttributeDismissComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-by-attribute-dismiss.component.spec.js.map