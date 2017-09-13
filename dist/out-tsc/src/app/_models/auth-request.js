"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var index_1 = require("../_services/index");
var AUTH_HEADER_KEY = 'Authorization';
var AUTH_PREFIX = 'Bearer';
var AuthRequestOptions = (function (_super) {
    __extends(AuthRequestOptions, _super);
    function AuthRequestOptions() {
        var _this = _super.call(this) || this;
        var token = localStorage.getItem(index_1.TOKEN_NAME);
        if (token) {
            _this.headers.append(AUTH_HEADER_KEY, AUTH_PREFIX + " " + token);
        }
        return _this;
    }
    return AuthRequestOptions;
}(http_1.BaseRequestOptions));
exports.AuthRequestOptions = AuthRequestOptions;
//# sourceMappingURL=auth-request.js.map