module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("color", {
    name: { 
      type: Sequelize.STRING,
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
    }
  });
  return model;
};