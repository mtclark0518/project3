module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define("color_attribute", {
        count: {
            type: Sequelize.INTEGER // just a placeholder for now
        },
        // attrib_id: {
        //   type: Sequelize.INTEGER
        // },
        // color_id: {
        //   type: Sequelize.INTEGER
        // },
    });
    return model;
};