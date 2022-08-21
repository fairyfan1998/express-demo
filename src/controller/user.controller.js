import UserService from '../service/user.service';
import database from '../database';

const userService = new UserService(database.userEntityRepo);

export default {
  /**
   * CreateUser
   * @typedef {object} CreateUser
   * @property {string} username.required - 用户名
   * @property {string} password - 用户密码
   */
  /**
   * post /api/v1/user
   * @summary 创建用户
   * @tags 用户相关
   * @param {CreateUser} request.body.required - username or email -  application/json
   * @returns {object} 200 - 请求成功
   * @example request - 测试
   * {
   *   "username": "Bury The Light",
   *   "password": "Casey Edwards ft. Victor Borba",
   * }
   * @example response - 200 -  请求成功
   * {
   *   "code": 200,
   *   "message": "You have added a song!",
   *   "result":true
   * }
   * @example response - 200 - 请求失败
   * {
   *   "message": "Failed to save song because you did not specify a title",
   *   "errCode": "EV121"
   * }
   */
  createUser(req, res) {
    const user = req.body;
    // await userService.create(user);
    res.json({ code: 1 });
    // res.send(111);
    // res.send('<p>some html</p>');
    // throw new Error('23');
  },

  /**
   * GET /user/test
   * @tags 用户相关
   * @operationId abc - 我是operationId
   * @summary 测试
   * @param {string} email.query.required - username or email - eg: user@domain
   * @param {string} password.query.required - user's password.
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  async updateUser(req, res) {
    const user = req.body;
    await userService.update(user);
  },

  /**
   * post /api/v1/user/delete
   * @summary 用户删除-逻辑删除
   * @tags 用户相关
   * @return {object} 200 - success response
   */
  async deleteUserById(req, res) {
    const { id } = req.body;
    await userService.destroyById(id);
  },

  /**
   * post /api/v1/user/destroy
   * @summary 用户删除-物理删除
   * @tags 用户相关
   * @return {object} 200 - success response
   */
  async destroyUserById(req, res) {
    const { id } = req.body;
    await userService.destroyById(id);
  }
};
