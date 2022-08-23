/**
 * 用户实体操作类，专注业务逻辑
 */
import BaseService from './base.service';

export default class UserService extends BaseService {
  async test() {
    return this.modelEntity.findAll();
  }

  /**
   * 根据用户名查询
   * @param username
   */
  async findOneByUserName(username) {
    return this.modelEntity.findOne({
      raw: true,
      where: {
        username
      }
    });
  }

  /**
   * 查询所有用户
   */
  async findAllUser() {
    return this.modelEntity.findAll({
      raw: true
    });
  }
}
