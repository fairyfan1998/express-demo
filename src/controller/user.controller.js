import UserService from '../service/user.service';
import database from '../database';

export default class UserController {
  constructor() {
    this.userService = new UserService(database.userEntityRepo);
  }

  async test() {
    console.log(this.userService);
    const result = await this.userService.test();
    return result;
  }
}
