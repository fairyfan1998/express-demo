/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:43:59
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:50:58
 */

import UserController from './user.controller';

export default function (req, res) {
  const userController = new UserController(req, res);
  return { userController };
}
