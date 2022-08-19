/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:52:05
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-16 23:12:28
 */

const healthController = require('../controller/health.controller');

module.exports = (router) => {
  // 项目的健康检查路由
  router.get('/api/health', healthController.checkRouterHealth);
};
