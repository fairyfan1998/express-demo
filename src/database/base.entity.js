import { DataTypes } from 'sequelize';

/**
 * 数据库表通用字段
 */
export default {
  create_time: {
    field: 'create_time',
    type: DataTypes.BIGINT({ length: 13 }),
    defaultValue: new Date().getTime(),
    comment: '创建时间'
  },
  update_time: {
    field: 'update_time',
    type: DataTypes.BIGINT({ length: 13 }),
    defaultValue: 0,
    comment: '更新时间'
  },
  delete_time: {
    field: 'delete_time',
    type: DataTypes.BIGINT({ length: 13 }),
    defaultValue: 0,
    comment: '删除时间'
  }
};
