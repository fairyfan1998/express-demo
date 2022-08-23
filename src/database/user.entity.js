/**
 * 用户表
 */
import { DataTypes } from 'sequelize';
import baseEntity from './base.entity';

export default (sequelizeConn) => sequelizeConn.define(
  'User',
  {
    ...baseEntity,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(40)
    },
    password: {
      type: DataTypes.STRING(40)
    }
  },
  {
    // 指定数据库中对应的tbl_user表
    tableName: 'tbl_user',
    freezeTableName: false,
    // 是否自动添加时间戳createAt，updateAt
    timestamps: false
  }
);
