var bcrypt = require('bcrypt-nodejs');
module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define("user", {
        local: {
            email: {
                type: Sequelize.STRING,
                notNull: true,
                isEmail: true
            },
            password: {
                type: Sequelize.STRING,
                notNull: true
            }
        }

    }, {
        instanceMethods: {
            hash: function(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
            },

            validPassword: function(password) {
                return bcrypt.compareSync(password, this.local.password);
            }
        }
    });
    return model;
};