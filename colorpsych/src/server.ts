import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';
import { ngExpressEngine } from '@ngx-universal/express-engine';
import { AppServerModule } from './app/app.server.module';

import * as express from 'express';
import * as _ from 'lodash';
import * as jwt from 'jsonwebtoken';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
// import * as flash from 'connect-flash';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as db from './models/index';

import { router as expressRouter } from './config/routes';

enableProdMode();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));
app.use(morgan('dev'));



let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));
app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, '..', 'dist')));
app.get('/', (req, res) => {
    res.render('index', { req });
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

app.use(expressRouter);

app.listen(process.env.PORT || 3000, function () {
    console.log('all systems go');
});



// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// var users = [{
//         id: 1,
//         name: 'jonathanmh',
//         password: '%2yx4'
//     },
//     {
//         id: 2,
//         name: 'test',
//         password: 'test'
//     }
// ];
// interface jwtOptions()

// const jwtOptions = {};
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// jwtOptions.secretOrKey = 'enderWillSaveYou';

// const strategy = new JwtStrategy(jwtOptions,
//     function(jwt_payload, next) {
//         console.log('payload recieved', jwt_payload);
//         var user = users[_findIndex(users, { id: jwt_payload.id })];
//         if (user) {
//             next(null, user);
//         } else {
//             next(null, false);
//         }
//     });

// passport.use(strategy);
// app.use(passport.initialize());

// app.post("/login", function(req, res) {
//     if (req.body.name && req.body.password) {
//         var name = req.body.name;
//         var password = req.body.password;
//     }
//     var user = users[_.findIndex(users, { name: name })];
//     if (!user) {
//         res.status(401).json({ message: 'no user' });
//     }
//     if (user.password === req.body.password) {
//         var payload = { id: user.id };
//         var token = jwt.sign(payload, jwtOptions.secretOrKey);
//         res.json({ message: 'ok', token: token });
//     } else {
//         res.status(401).json({ message: 'incorrect password' });
//     }
// });
// app.get("/secret",
//     passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.json({ message: "Success! You can not see this without a token" });
//     }
// );

// app.get("/secretDebug",
//     function(req, res, next) {
//         console.log(req.get('Authorization'));
//         next();
//     },
//     function(req, res) {
//         res.json("debugging");
//     });


// app.get('/',
//     function(req, res) {
//         res.json('herrroo');
//     }
// );

// app.listen(3000, () => {
//     console.log('herrrooooooo');
// });