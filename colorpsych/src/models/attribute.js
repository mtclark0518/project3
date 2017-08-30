module.exports = function(sequelize, Sequelize){
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