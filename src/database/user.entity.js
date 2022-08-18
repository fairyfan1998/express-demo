/**
 * 用户表
 */
import { STRING } from 'sequelize';
import baseEntity from './base.entity';

export default function (sequelizeConn) {
  return sequelizeConn.define(
    'User',
    {
      ...baseEntity,
      username: {
        type: STRING
      },
      password: {
        type: STRING
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
}
