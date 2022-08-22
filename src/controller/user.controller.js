import UserService from '../service/user.service';
import database from '../database';
import dataResponse from '../common/utils/data-response';

const userService = new UserService(database.userEntityRepo);

export default {
  /**
   * post /api/v1/user
   * @summary 创建用户
   * @tags 用户相关
   * @param {object} request.body.required  -  application/json
   * @returns {object} 200 - 请求成功
   * @example request - 123
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
  createUser(req, res) {
    console.log(req.body, req.body);
    // await userService.create(user);
    // res.json(dataResponse.returnFormat(true));
    // res.send(111);
    // res.send('<p>some html</p>');
    dataResponse.throwFormat(500, '测试');
  },

  /**
   * post /api/v1/user/info
   * @tags 用户相关
   * @summary 更新用户信息
   * @param {object} request.body.required - application/json
   * @returns {object} 200 - 请求成功
   */
  async updateUser(req, res) {
    const user = req.body;
    await userService.update(user);
  },

  /**
   * post /api/v1/user/delete
   * @summary 用户删除-逻辑删除
   * @tags 用户相关
   * @param {object} request.body.required - application/json
   * @returns {object} 200 - 请求成功
   */
  async deleteUserById(req, res) {
    const { id } = req.body;
    await userService.destroyById(id);
  },

  /**
   * post /api/v1/user/destroy
   * @summary 用户删除-物理删除
   * @tags 用户相关
   * @param {object} request.body.required - application/json
   * @returns {object} 200 - 请求成功
   */
  async destroyUserById(req, res) {
    const { id } = req.body;
    await userService.destroyById(id);
  }
};
