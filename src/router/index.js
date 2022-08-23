/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:54:46
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:55:03
 */
// 参考：https://www.codenong.com/14934452/

import userRouter from './user.router';
import healthRouter from './health.router';

export default (app, router) => {
  // 路由
  app.use('/api/v1/user', userRouter(router));
  app.use('/api/v1/health', healthRouter(router));
};
