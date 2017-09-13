module.exports = function(sequelize, Sequelize){

  /* 
   * Attribute table schema: id, name, description, complement
   */

  var model = sequelize.define("attribute", {
    id: { 
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true
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
  });
  return model;
};