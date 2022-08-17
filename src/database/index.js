"use strict";

const { globalConfig } = require("../../config");
const userEntityInit = require("./user.entity");
const sequelizeFactory = require("./sequelize.factory");

const { username, password, database, options } = globalConfig.sequelize;
const sequelizeInstance = new sequelizeFactory(
  username,
  password,
  database,
  options
).getSingleInstance();

module.exports = {
  userEntity: userEntityInit(sequelizeInstance),
};
