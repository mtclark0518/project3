const passport = require('passport');
const db = require('../models');

//SIGNUP
//GET 
function getSignup(request, response, next) {
    response.render('signup', { message: request.flash('signupMessage') });
}

//POST
function postSignup(request, response, next) {
    var signupStrategy = passport.authenticate('local-signup', {

        successRedirect: '/profile/' + request.body.email,
        failureRedirect: '/signup',
        failureFlash: true
    });
    return signupStrategy(request, response, next);
}


////LOGIN
//GET 
function getLogin(request, response, next) {
    response.render('login', { message: request.flash('loginMessage') });
}
//POST
function postLogin(request, response, next) {
    var loginStrategy = passport.authenticate('local-login', {
        successRedirect: '/profile/' + request.body.email,
        failureRedirect: '/login',
        failureFlash: true
    });
    return loginStrategy(request, response, next);
}

///LOGOUT
//GET
function getLogout(request, response, next) {
    request.logout();
    response.redirect('./');
}


module.exports = {
    getLogout: getLogout,
    getLogin: getLogin,
    postLogin: postLogin,
    getSignup: getSignup,
    postSignup: postSignup
};