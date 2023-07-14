// 参考：https://www.codenong.com/14934452/

import userRouter from './user.router';
import healthRouter from './health.router';

export default function (app, router) {
  // 路由
  app.use('/api/v1/user', userRouter(router));
  app.use('/api/v1/health', healthRouter(router));
}
