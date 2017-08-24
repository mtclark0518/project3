module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("palette", {
    name: { 
      type: Sequelize.TEXT,
      notNull: true
    },
    format: { 
      type: Sequelize.STRING,
      notNull: true,
      isIn: [['color', 'attrib']] // there are only 2 valid values
    },
    notes: { type: Sequelize.TEXT }
  });
  return model;
};