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
        // setterMethods: {
        //     hash(value) {
        //         const password = value;
        //         console.log(password);
        //         // this.setDataValue('password', bcrypt) bcrypt.hashSync(this.password;
        //     }
        // },

    });
    model.prototype.hash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    };
    model.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    return model;
};