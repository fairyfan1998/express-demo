/*
 * @Description: 默认配置文件
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:31:43
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-14 23:56:21
 */

export default {
  port: 8000,
  hostname: '127.0.0.1',
  sequelize: {
    username: 'root',
    password: 123456,
    database: 'express-demo',
    options: {}
  },
  redis: {
    port: 6379,
    host: '127.0.0.1',
    username: 'default',
    password: '',
    db: 10
  }
};
