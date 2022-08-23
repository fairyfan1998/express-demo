/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:52:05
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-16 23:12:28
 */

import healthController from '../controller/health.controller';

export default (healthRouter) => {
  healthRouter.get('/mysql', healthController.checkMysql);
  healthRouter.get('/redis', healthController.checkRedis);
  return healthRouter;
};
