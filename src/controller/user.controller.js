import UserService from '../service/user.service';
import database from '../database';
import dataResponse from '../common/utils/data-response';
import dataTransform from '../common/utils/data-transform';

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
    // 密码加密
    user.password = dataTransform.md5Encrypt(user.password);
    await userService.create(user);
    res.json(dataResponse.returnFormat(true, '添加成功'));
  },
  async updateUser(req, res) {
    const user = req.body;
    await userService.update(user);
  },

  async findAllUser(req, res) {
    const userList = await userService.findAll();
    res.json(dataResponse.returnFormat(userList, '获取用户列表成功'));
  },

  async findOneById(req, res) {
    const { id } = req.params;
    const user = await userService.findOneById(id);
    res.json(dataResponse.returnFormat(user == null ? {} : user, '获取用户'));
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
