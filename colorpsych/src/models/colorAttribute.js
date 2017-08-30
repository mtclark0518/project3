module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define("color_attribute", {
        count: {
            type: Sequelize.INTEGER // just a placeholder for now
        },
    });
    return model;
};