"use strict";
const sequelize = require("sequelize");
const instance = Symbol("sequelize#instance");

class SequelizeFactory {
  constructor(database, username, password, options) {
    this[instance] = new sequelize(database, username, password, options);
  }

  static getSingleInstance() {
    const { database, username, password, options } = this;
    if (this[instance] === null) {
      this[instance] = new SequelizeFactory(
        database,
        username,
        password,
        options
      );
    }
    return this[instance];
  }
}

module.exports = SequelizeFactory;
