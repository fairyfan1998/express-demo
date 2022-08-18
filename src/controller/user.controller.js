import UserService from '../service/user.service';
import database from '../database';

export default class UserController {
  constructor() {
    this.userService = new UserService(database.userEntityRepo);
  }

  /**
   * This function comment is parsed by doctrine
   * @route GET /user
   * @group user - Operations about user
   * @param {string} email.query.required - username or email - eg: user@domain
   * @param {string} password.query.required - user's password.
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  async test() {
    console.log(this.userService);
    const result = await this.userService.test();
    return result;
  }
}
