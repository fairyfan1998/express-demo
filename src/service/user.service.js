/**
 * 用户实体操作类，专注业务逻辑
 */
import BaseService from './base.service';

export default class UserService extends BaseService {
  async test() {
    return this.modelEntity.findAll();
  }
}
