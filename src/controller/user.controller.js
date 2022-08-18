import UserService from '../service/user.service';
import { userEntity } from '../database';

export default class UserController {
  constructor() {
    this.userService = new UserService(userEntity);
  }

  async test(req, res) {
    console.log(req);
    console.log(res);
    const result = await this.userService.test();
    return result;
  }
}
