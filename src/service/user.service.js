const BaseService = require('./base.service');

/**
 * 用户实体操作类，专注业务逻辑
 */
export default class extends BaseService {
  async test() {
    return this.modelEntity.findAll();
  }
}
