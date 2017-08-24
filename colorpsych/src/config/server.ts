import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as flash from 'connect-flash';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { readFileSync } from 'fs';
import { join } from 'path';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
// import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app-server-module.ngfactory';

import { router as expressRouter } from './routes'; 

const PORT = 3000;

enableProdMode();

const app = express();

app.use(bodyParser.json());

app.use(expressRouter);

let template = readFileSync(join(__dirname, '..', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    // renderModuleFactory(AppServerModuleNgFactory, opts)
    // .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

// app.get('*.*', express.static(join(__dirname, '..', 'dist')));
// app.get('*', (req, res) => {
//     res.render('index', { req });
// });


app.use(session({ secret: 'PROJECT-3'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// import './passport';(passport);

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});
app.listen(PORT, () => {
    console.log('all systems go on ' + PORT);
});

