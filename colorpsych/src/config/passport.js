const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/');
const User = require('../models/user');



module.exports = function(passport) {

    passport.serializeUser(function(user, callback) {
        callback(null, user.id);
    });
    passport.deserializeUser(function(id, callback) {
        db.User.findById(id, function(err, user) {
            callback(err, user);
        });
    });
    passport.use('local-signup', new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, function(req, email, password, callback) {
        db.User.findOne({ 'local.email': email }, function(err, user) {
            if (err) return console.log("error: " + err);
            if (user) {
                return callback(null, false, req.flash('signupMessage', "email already in use"));

            } else {
                let newUser = new db.User();
                newUser.local.email = email;
                newUser.local.password = newUser.hash(password);

                newUser.save(function(err) {
                    if (err) throw err;
                    return callback(null, newUser);
                });
            }
        });

    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, function(req, email, password, callback) {
        db.User.findOne({ 'local.email': email }, function(err, user) {
            if (err) {
                return callback(err);
            }
            if (!user) {
                return callback(null, false, req.flash('loginMessage', 'invalid login credentials'));
            }
            if (!user.validPassword(password)) {
                return callback(null, false, req.flash('loginMessage', 'invalid login credentials'));
            }
            return callback(null, user);
        });
    }));
};