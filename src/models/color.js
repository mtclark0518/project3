module.exports = function(sequelize, Sequelize){

  /*
   * Color table schema: id, name, isNeutral, hex, rgb, cymk
   */

  var model = sequelize.define("color", {
    id: { 
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true
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
    }
  });
  return model;
};
