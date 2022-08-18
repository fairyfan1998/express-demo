import UserService from '../service/user.service';
import database from '../database';

export default class UserController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.userService = new UserService(database.userEntityRepo);
  }

  async test() {
    const result = await this.userService.test();
    return result;
  }
}
