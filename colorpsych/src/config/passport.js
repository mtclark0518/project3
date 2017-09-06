// var passport = require('passport');
// var passportJWT = require('passport-jwt');
// var JWTStrategy = passportJWT.Strategy;
// var ExtractJWT = passportJWT.ExtractJwt;
// var LocalStrategy = require('passport-local').Strategy;

// var db = require('../models/');



// module.exports = function(passport) {

//     passport.serializeUser(function(user, callback) {
//         callback(null, user.id);
//     });
//     passport.deserializeUser(function(id, callback) {
//         db.User.findById(id, function(err, user) {
//             callback(err, user);
//         });
//     });
//     passport.use('local-signup', new LocalStrategy({
//         usernameField: "email",
//         passwordField: "password",
//         passReqToCallback: true
//     }, function(req, email, password, callback) {
//         console.log('hi function create is here');
//         console.log(req.body.password);
//         let pass;
//         pass = req.body.password;
//         db.User.findOne({ 'email': email }, function(err, user) {
//             if (err) return console.log("error: " + err);
//             if (user) {
//                 return callback(null, false);
//             } else {
//                 let newUser;
//                 newUser = db.User.create({
//                     firstName: req.body.firstName,
//                     lastName: req.body.lastName,
//                     email: req.body.email,
//                 })

//                 .then(function(user) {
//                     console.log(pass);
//                     let hashPass;
//                     hashPass = user.hash(pass);
//                     console.log(hashPass);
//                     user.updateAttributes({ password: hashPass })

//                     .then(function() {
//                         console.log(user.dataValues.password);
//                         if (!user) {
//                             res.send(res, 'not saved');
//                         } else {
//                             res.json(user);
//                             console.log('successfully created user with hashed password. you\'re ammmaaaaazing ' + user.dataValues.lastName);
//                         }
//                     });
//                 });
//             }

//         });

//     }));

//     passport.use('local-login', new LocalStrategy({
//         usernameField: "email",
//         passwordField: "password",
//         passReqToCallback: true
//     }, function(req, email, password, callback) {
//         db.User.findOne({ 'email': email }, function(err, user) {
//             if (err) {
//                 return callback(err);
//             }
//             if (!user) {
//                 return callback(null, false, req.flash('loginMessage', 'invalid login credentials'));
//             }
//             if (!user.validPassword(password)) {
//                 return callback(null, false, req.flash('loginMessage', 'invalid login credentials'));
//             }
//             return callback(null, user);
//         });
//     }));
// };