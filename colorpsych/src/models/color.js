module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define("color", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true
        },
        isNeutral: {
            type: Sequelize.BOOLEAN,
            notNull: true
        },
        hex: {
            type: Sequelize.STRING,
            notNull: true
        },
        rgb: {
            type: Sequelize.STRING,
            notNull: true
        },
        cymk: {
            type: Sequelize.STRING,
            notNull: true
        },
        attrib_id: {
            type: Sequelize.INTEGER,

            references: {
                model: Attribute,
                key: 'id',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    });
    return model;
};