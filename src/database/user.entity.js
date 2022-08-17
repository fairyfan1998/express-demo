"use strict";
/**
 * 用户表
 */
const { STRING, BIGINT } = require("src/database/sequelize.factory");

module.exports = (sequelizeConn) =>
  sequelizeConn.define(
    "User",
    {
      username: {
        type: STRING,
      },
      password: {
        type: STRING,
      },
      create_time: {
        type: BIGINT(13),
        defaultValue: new Date().getTime(),
      },
      update_time: {
        type: BIGINT(13),
        defaultValue: 0,
      },
      delete_time: {
        type: BIGINT(13),
        defaultValue: 0,
      },
    },
    {
      // 指定数据库中对应的tbl_user表
      tableName: "tbl_user",
      freezeTableName: false,
      // 是否自动添加时间戳createAt，updateAt
      timestamps: false,
    }
  );
