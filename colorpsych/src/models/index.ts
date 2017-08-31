
// Connect
import * as Sequelize from 'sequelize';


var sequelize = new Sequelize(process.env.DATABASE_URL || 
                              'postgres://conk@localhost:5432/color_psych');


var User = sequelize.import("./user");
var Color = sequelize.import("./color");
var Attribute = sequelize.import("./attribute");
var Palette = sequelize.import("./palette")


Palette.belongsTo(User, {
  // don't need through because palette tale contains userId
  // through: 'user_palettes',  
});

User.hasMany(Palette, {
  // don't need through because palette tale contains userId
  // through: 'user_palettes',  
});

Palette.belongsToMany(Color, { 
  through: 'palette_colors',    // this relationship table is auto-generated
})

Color.belongsToMany(Palette, {
  through: 'palette_colors',    // this relationship table is auto-generated
});

Palette.belongsToMany(Attribute, {
  through: 'palette_attributes',  // this relationship table is auto-generated
});

Attribute.belongsToMany(Palette, {
  through: 'palette_attributes',  // this relationship table is auto-generated
});

Attribute.Color = Attribute.belongsToMany(Color, {
  through: 'color_attributes',  // this relationship table is auto-generated
});

Color.Attribute = Color.belongsToMany(Attribute, {
  through: 'color_attributes',  // this relationship table is auto-generated
});

const db = <any>{};
db.models = {
  User,
  Color,
  Attribute,
  Palette
};

// Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export { db };
