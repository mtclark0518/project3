"use strict";
/*
 *  Setup the db (init the tables to default/empty )
 */
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
models_1.db.sequelize.sync({ force: true }).then(function () {
    process.exit();
});
//# sourceMappingURL=dbSetup.js.map