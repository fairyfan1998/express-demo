import UserService from '../service/user.service';
import database from '../database';
import dataResponse from '../common/utils/data-response';

const userService = new UserService(database.userEntityRepo);

export default {
  async createUser(req, res) {
    const user = req.body;
    const userInDB = await userService.findOneByUserName(user.username);
    console.log(userInDB);
    if (userInDB != null) {
      res.json(dataResponse.returnFormat(false, '用户已存在'));
      return;
    }
    await userService.create(user);
    res.json(dataResponse.returnFormat(true, '添加成功'));
  },
  async updateUser(req, res) {
    const user = req.body;
    await userService.update(user);
  },
  async deleteUserById(req, res) {
    const { id } = req.body;
    await userService.destroyById(id);
  },
  async destroyUserById(req, res) {
    const { id } = req.body;
    await userService.destroyById(id);
  }
};
