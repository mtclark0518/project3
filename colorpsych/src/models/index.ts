import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://TheTDrive@localhost:5432/colorpsych');

const User = sequelize.import("./user");


const db = <any>{};
db.models = {
    User
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};