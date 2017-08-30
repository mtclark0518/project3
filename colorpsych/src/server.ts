import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';


import { ngExpressEngine } from '@ngx-universal/express-engine';
import { AppServerModule } from './app/app.server.module';


import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
// import * as flash from 'connect-flash';
import * as morgan from 'morgan';
// import class db from './models';
import { readFileSync } from 'fs';
import { join } from 'path';

nk
import { router as expressRouter } from './config/routes';

import * as db from './models/index';

enableProdMode();

const app = express();

app.use(bodyParser.json());
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

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.use(expressRouter);


app.listen(3000, function () {
    console.log('all systems go');
});
