"use strict";
const sequelize = require("sequelize");
const instance = Symbol("sequelize#instance");

class SequelizeFactory {
  constructor(database, username, password, options) {
    this.database = database;
    this.username = username;
    this.password = password;
    this.options = options;
  }

  /**
   * 创建sequelize连接单例
   */
  getSingleInstance() {
    const { database, username, password, options } = this;
    if (this[instance] === null) {
      this[instance] = new sequelize(database, username, password, options);
    }
    return this[instance];
  }
}

module.exports = SequelizeFactory;
