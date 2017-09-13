// ----------------------------------
/////////////-----------------------
//// USER MODEL---------------------

var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, Sequelize) {

    var model = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            notNull: true,
            isEmail: true
        },
        password: {
            type: Sequelize.STRING,
            notNull: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
    });
    model.prototype.hash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    };
    model.prototype.validPassword = function(attempted, encrypted) {
        return bcrypt.compareSync(attempted, encrypted);
    };
    return model;
};