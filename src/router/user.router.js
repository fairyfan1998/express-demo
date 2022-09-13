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
   *   "username": "142vip",
   *   "password": "654321"
   * }
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "请求成功",
   *   "result":true
   * }
   */
  userRouter.post(
    '/',
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
    '/info',
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
    '/destroy',
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
    '/delete',
    validateData(userRule.destroyUserRule, validateType.POST),
    userController.deleteUserById
  );

  /**
   * get /api/v1/user/list
   * @tags 用户相关
   * @summary 获取用户列表
   * @returns {object} 200 - 请求成功
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "请求成功",
   *   "result":[]
   * }
   */
  userRouter.get('/list', userController.findAllUser);
  /**
   * get /api/v1/user/{id}
   * @tags 用户相关
   * @summary 获取单个用户信息
   * @param {number} id.path - 用户id  例如：4
   * @returns {object} 200 - 请求成功
   * @example request - 请求数据Mock
   * {
   *   "id": 4
   * }
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "请求成功",
   *   "result":{}
   * }
   */
  userRouter.get('/:id', userController.findOneById);

  return userRouter;
};
