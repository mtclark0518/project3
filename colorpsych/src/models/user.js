var bcrypt = require('bcrypt');

module.exports = function(sequelize, Sequelize) {
    var Model = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            notNull: true,
            isEmail: true
        },
        password: {
            type: Sequelize.STRING,
            notNull: true
        }

    });
    return Model;

    Model.prototype.hash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    };

    Model.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
};