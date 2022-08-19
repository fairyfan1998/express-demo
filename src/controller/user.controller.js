import UserService from '../service/user.service';
import database from '../database';

export default class UserController {
  constructor() {
    this.userService = new UserService(database.userEntityRepo);
  }

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
   * @deprecated
   */
  async test() {
    console.log(this.userService);
    const result = await this.userService.test();
    return result;
  }

  /**
   * 1213212
   * @route post /user/test2/{email}
   * @group user - Operations about user
   * @param {string} email.params.required - username or email - eg: user@domain
   * @param {string} password.body.required - user's password.
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  // eslint-disable-next-line class-methods-use-this
  async test1() {
    return 1;
  }
}
