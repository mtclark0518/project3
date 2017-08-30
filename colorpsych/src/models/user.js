module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      notNull: true,
      isEmail: true
    },
    password: {
      type: Sequelize.STRING,
      notNull: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  return model;
};