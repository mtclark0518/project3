"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Connect
var Sequelize = require("sequelize");
var sequelize = new Sequelize(process.env.DATABASE_URL ||
    'postgres://conk@localhost:5432/color_psych');
// ian // 'postgres://nordeck@localhost:5432/color_psych');
var User = sequelize.import("./user");
var Color = sequelize.import("./color");
var Attribute = sequelize.import("./attribute");
var Palette = sequelize.import("./palette");
Palette.belongsTo(User, {});
User.hasMany(Palette, {});
Palette.belongsToMany(Color, {
    through: 'palette_colors',
});
Color.belongsToMany(Palette, {
    through: 'palette_colors',
});
Palette.belongsToMany(Attribute, {
    through: 'palette_attributes',
});
Attribute.belongsToMany(Palette, {
    through: 'palette_attributes',
});
Attribute.Color = Attribute.belongsToMany(Color, {
    through: 'color_attributes',
});
Color.Attribute = Color.belongsToMany(Attribute, {
    through: 'color_attributes',
});
var db = {};
exports.db = db;
db.models = {
    User: User,
    Color: Color,
    Attribute: Attribute,
    Palette: Palette
};
// Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//# sourceMappingURL=index.js.map