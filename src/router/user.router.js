import userController from '../controller/user.controller';
import userRule from '../common/validate-data/user.rule';
import { validateData, validateType } from '../common/validate-data';

/**
 * 用户模块路由
 */
export default (userRouter) => {
  /**
   * post /api/v1/user
   * @summary 创建用户
   * @tags 用户相关
   * @param {object} request.body.required  -  application/json
   * @returns {object} 200 - 请求成功
   * @example request - 请求数据Mock
   * {
   *   "username": "fairy",
   *   "password": "123456"
   * }
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "请求成功",
   *   "result":true
   * }
   */
  userRouter.post(
    '/user',
    validateData(userRule.createUserRule, validateType.POST),
    userController.createUser
  );
  /**
   * post /api/v1/user/info
   * @tags 用户相关
   * @summary 更新用户信息
   * @param {object} request.body.required - application/json
   * @returns {object} 200 - 请求成功
   * @example request - 请求数据Mock
   * {
   *   "username": "fairy",
   *   "password": "123456"
   * }
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "请求成功",
   *   "result":true
   * }
   */
  userRouter.post(
    '/user/info',
    validateData(userRule.updateUserRule, validateType.POST),
    userController.updateUser
  );
  /**
   * post /api/v1/user/destroy
   * @tags 用户相关
   * @summary 删除用户信息 - 物理删除
   * @param {object} request.body.required - application/json
   * @returns {object} 200 - 请求成功
   * @example request - 请求数据Mock
   * {
   *   "username": "fairy",
   *   "password": "123456"
   * }
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "请求成功",
   *   "result":true
   * }
   */
  userRouter.post(
    '/user/destroy',
    validateData(userRule.deleteUserRule, validateType.POST),
    userController.destroyUserById
  );
  /**
   * post /api/v1/user/delete
   * @tags 用户相关
   * @summary 删除用户信息 - 逻辑删除
   * @param {object} request.body.required - application/json
   * @returns {object} 200 - 请求成功
   * @example request - 请求数据Mock
   * {
   *   "username": "fairy",
   *   "password": "123456"
   * }
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "请求成功",
   *   "result":true
   * }
   */
  userRouter.post(
    '/user/delete',
    validateData(userRule.destroyUserRule, validateType.POST),
    userController.deleteUserById
  );
  return userRouter;
};
