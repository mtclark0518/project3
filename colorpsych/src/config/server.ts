import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as flash from 'connect-flash';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

const app = express();






app.use(session({ secret: 'PROJECT-3'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

import './passport'(passport);

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});


