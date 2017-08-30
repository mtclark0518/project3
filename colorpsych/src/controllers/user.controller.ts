import * as passport from 'passport';
import { db } from '../models';

const User = db.models.User;



// GET
function index(req, res) {
    User.findAll().then(function(users) {
        res.json(users);
    });
}
// POST
function create(req, res) {
    User.create(req.body).then(function(user) {
        if (!user) {
            res.send('user not saved');
        } else {
            res.json(user);
        }
    });
}

// //SIGNUP
// //GET 
// function getSignup(request, response, next) {
//     response.render('signup', { message: request.flash('signupMessage') });
// }

// //POST
// function postSignup(request, response, next) {
//     var signupStrategy = passport.authenticate('local-signup', {

//         successRedirect: '/profile/' + request.body.email,
//         failureRedirect: '/signup',
//         failureFlash: true
//     });
//     return signupStrategy(request, response, next);
// }


// ////LOGIN
// //GET 
// function getLogin(request, response, next) {
//     response.render('login', { message: request.flash('loginMessage') });
// }
// //POST
// function postLogin(request, response, next) {
//     var loginStrategy = passport.authenticate('local-login', {
//         successRedirect: '/profile/' + request.body.email,
//         failureRedirect: '/login',
//         failureFlash: true
//     });
//     return loginStrategy(request, response, next);
// }

// ///LOGOUT
// //GET
// function getLogout(request, response, next) {
//     request.logout();
//     response.redirect('./');
// }


const userController = <any>{};
    userController.index = index;
    userController.create = create;
    // getLogout: getLogout,
    // getLogin: getLogin,
    // postLogin: postLogin,
    // getSignup: getSignup,
    // postSignup: postSignup
export{userController};

