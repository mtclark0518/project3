var bcrypt = require('bcrypt');

// Model.prototype.hash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };

// Model.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };
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
        }
    });
    return model;
};