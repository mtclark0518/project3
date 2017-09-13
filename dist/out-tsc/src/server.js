"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app.server.module.ngfactory");
var express_engine_1 = require("@ngx-universal/express-engine");
var app_server_module_1 = require("./app/app.server.module");
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
// import * as flash from 'connect-flash';
var fs_1 = require("fs");
var path_1 = require("path");
var routes_1 = require("./config/routes");
core_1.enableProdMode();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));
app.use(morgan('dev'));
var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'dist', 'index.html')).toString();
app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: app_server_module_1.AppServerModule
}));
app.engine('html', function (_, options, callback) {
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', 'src');
app.get('*.*', express.static(path_1.join(__dirname, '..', 'dist')));
app.get('/', function (req, res) {
    res.render('index', { req: req });
});
// app.use(session({ secret: 'PROJECT-3' }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// require('./config/passport.js')(passport);
// app.use(function(req, res, next) {
//     res.locals.currentUser = req.user;
//     next();
// });
app.use(routes_1.router);
app.listen(process.env.PORT || 3000, function () {
    console.log('all systems go');
});
//# sourceMappingURL=server.js.map