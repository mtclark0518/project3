import { db } from '../models';

db.sequelize.sync({force: true}).then(function(){
  process.exit();
  // console.log('db is setup');
});