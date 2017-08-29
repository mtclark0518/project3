module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("attribute", {
    id: { 
      type: Sequelize.INTEGER, 
      primaryKey: true 
    },
    name: { 
      type: Sequelize.STRING,
      notNull: true
    },
    description: { 
      type: Sequelize.STRING 
    },
    complement: { 
      type: Sequelize.STRING 
    },
    color_id: {
      type: Sequelize.INTEGER,

      references: {
        model: Color,
        key: 'id',

        // This declares when to check the foreign key constraint. PostgreSQL only.
        //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  });
  return model;
};