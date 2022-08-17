"use strict";

const sequelize = require("src/database/sequelize.factory");
const { globalConfig } = require("../../config");
const userEntityInit = require("./user.entity");

const { username, password, database, options } = globalConfig.sequelize;
const sequelizeInstance = new sequelize(database, username, password, options);

module.exports = {
  userEntity: userEntityInit(sequelizeInstance),
};
