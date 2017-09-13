/////////////-----------------------
// --------------------------------
//// USER CONTROLLER----------------

import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import { db } from '../models';
import * as bcrypt from 'bcrypt-nodejs';
const User = db.models.User;

// GET
function userIndex(req, res) {
    User.findAll().then(function(users) {
        res.json(users);
    });
}
// POST
function create(req, res) {
    console.log('hi function create is here');
    console.log(req.body.password);
    let pass;
    pass = req.body.password;
    User.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
    })
    .then(function(user){
        console.log(pass);
        let hashPass;
        hashPass = user.hash(pass);
        console.log(hashPass);

        user.updateAttributes({
            password : hashPass
        })
        .then(function() {
            console.log(user.dataValues.password);
            if (!user) {res.send(res, 'not saved');
        } else {
            res.json(user);
            console.log('successfully created user with hashed password. you\'re ammmaaaaazing ' + user.dataValues.lastName);
        }
    });
  });
}
function login(req, res) {
    console.log('hi from login function');
    User.findOne({where: {email : req.body.email}})
    .then(function(user) {
        let encrypted, attempted;
        encrypted = user.dataValues.password;
        attempted = req.body.password;
        console.log('atPWD:: ' + attempted + 'encPWD:: ' + encrypted);
        console.log(user.validPassword(attempted, encrypted));
        if (user.validPassword(attempted, encrypted)) {
            res.json(user);
            console.log(user);
        } else {
            return console.log(': error');
        }
        // const auth = user.validPassword(encPWD, atPWD);
        // console.log(auth);
        });

}

function showByEmail(req, res) {
    console.log(req.params.email);
    User.findOne({
        where: {
            email: req.params.email
        }
    })
    .then(function(user) {
        console.log(user.email);
        if (!user) {
            res.status(404).send('ERROR: NOT FOUND');
        } else {
            console.log(user);
            res.json(user);
        }
    });
}
    // const where = findUser(req.params.email);
    // console.log('showByEmail: ' + where);
    // res.send('a response'); 

//     if (where === e) {
//         res.json(users[where]);
//     } else {
//         res.status(404).send('ERROR: no user found');
//     }
// }
function showById(req, res) {
    User.findById(req.params.id)
    .then(function(user) {
        if (!user) {
            res.send(res, 'user not found');
        } else {
            res.json(user);
        }
    });
}
// function create(req, res) {
//     console.log(req.params, req.body);
//             //   res.status(404).send('ERROR: cannot create user');

//     User.create(req.body)
//     .then(function(user) {
//         if (!user) {
//               res.status(404).send('ERROR: cannot create user');
//         } else {
//             res.json(user);
//         }
//     });
// }

// //SIGNUP
// //GET
// function getSignup(request, response, next) {
//     response.render('signup', { message: request.flash('signupMessage') });
// }

// //POST
// function postSignup(request, response, next) {
//     var signupStrategy = passport.authenticate('local-signup', {

//         successRedirect: '/user/' + request.body.email,
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
    userController.userIndex = userIndex;
    userController.create = create;
    userController.login = login;
    userController.showByEmail = showByEmail;
    userController.showById = showById;
    // getLogout: getLogout,
    // getLogin: getLogin,
    // postLogin: postLogin,
    // getSignup: getSignup,
    // postSignup: postSignup

    export{userController};

