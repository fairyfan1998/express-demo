import UserService from '../service/user.service';
import database from '../database';

const userService = new UserService(database.userEntityRepo);

export default {
  /**
   * 创建用户
   * @route post /api/v1/user
   * @summary 创建用户
   * @group user - 用户相关
   * @param {string} email.params.required - username or email - eg: user@domain
   * @param {string} password.body.required - user's password.
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
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
   * 1213212
   * @route GET /user/test
   * @group user - Operations about user
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
