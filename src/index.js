/*
 * @Description: 项目启动入口
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:14:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:38:15
 */

// 获取express对象
// 参考：https://www.jianshu.com/p/d1661ca9fe68

// 启动项目
import bootstrap from './bootstrap';
import database from './database';

/** -----------------------------database start------------------------------ */
database.sequelizeInstance.sync({
  alter: true, // 数据库表按照模型调整；
  force: false // 数据库表是否强制删除后重建
});
/** -----------------------------database end------------------------------ */

// todo： 处理全局未通过中间件捕获的异常

bootstrap();
