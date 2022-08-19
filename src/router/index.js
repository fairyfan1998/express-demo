/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:54:46
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:55:03
 */
// 参考：https://www.codenong.com/14934452/

// eslint-disable-next-line import/no-extraneous-dependencies
import userRouter from './user.router';

export default function (app) {
  app.use('/user', userRouter);
  // expressListRoutes(userRouter, { prefix: '/user' });
}
