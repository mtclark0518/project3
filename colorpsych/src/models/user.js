module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("user", {
    // local: {
      email: {
        type: Sequelize.STRING,
        notNull: true,
        isEmail: true
      },
      password: {
        type: Sequelize.STRING,
        notNull: true
      }
    // },
  });
  return model;
};