"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = (function () {
    function AppComponent(meta, title) {
        this.title = 'app';
        title.setTitle('colorPsychology');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'color psychology, dewey color system' },
            { name: 'description', content: 'design your personalities color palette' }
        ]);
    }
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return [
    { type: platform_browser_1.Meta, },
    { type: platform_browser_1.Title, },
]; };
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map