
//Connect
import * as Sequelize from 'sequelize';
const sequelize = new Sequelize('postgres://TheTDrive@localhost:5432/color_psych');
const User = sequelize.import('./user');
// var Color = sequelize.import("./color");
const Color = sequelize.define('color', {
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
    },
    // attributeId: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Attribute,
    //     key: 'id',

    //     // This declares when to check the foreign key constraint. PostgreSQL only.
    //     //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // }
  });
// var Attribute = sequelize.import("./attribute");
  var Attribute = sequelize.define("attribute", {
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
    // colorId: {
    //   type: Sequelize.INTEGER,

    //   references: {
    //     model: Color,
    //     key: 'id',

    //     // This declares when to check the foreign key constraint. PostgreSQL only.
    //     //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // }
  });
// var Palette = sequelize.import("./palette")
var Palette = sequelize.import("./palette")


Palette.belongsTo(User, {
    // through: 'user_palettes',
}); // association key is in Palette

User.hasMany(Palette, {
    // through: 'user_palettes',
});

Palette.belongsToMany(Color, {  // hasMany?
  through: 'palette_colors',
});

Color.belongsToMany(Palette, {
    through: 'palette_colors',
});

Palette.belongsToMany(Attribute, {  // hasMany?
    through: 'palette_attributes',
});

Attribute.belongsToMany(Palette, {
    through: 'palette_attributes',
});

Attribute.Color = Attribute.belongsToMany(Color, { 
  // as: 'Colors',
  // through: Color_Attribute,
  through: 'color_attributes',
  // foreignKey: 'attrib_id'
});

Color.Attribute = Color.belongsToMany(Attribute, {
  // as: 'Attributes',
  // through: Color_Attribute,
  through: 'color_attributes',
  // foreignKey:'color_id'
});
const Color_Attribute = sequelize.import('./colorAttribute');
// Palette.belongsTo(User); // association key is in Palette
// User.hasMany(Palette);
// Palette.hasMany(Color);
// Color.belongsToMany(Palette);
// Palette.hasMany(Attribute);
// Attribute.belongsToMany(Palette);
Attribute.belongsToMany(Color, {
  // as: 'Colors',
  // through: Attribute,
  through: Color_Attribute,
  // foreignKey: 'Attribute_rowId'
});
Color.belongsToMany(Attribute, {
  // as: 'Attribs',
  // through: Color,
  through: Color_Attribute,
  // foreignKey:'Color_rowId'
});

const db = <any>{};
db.models = {
  User,
  Color,
  Attribute,
  Color_Attribute,  
  Palette
};

//Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export { db };

