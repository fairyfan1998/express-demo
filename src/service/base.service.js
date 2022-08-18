/*
 * @Description:  service层方法封装示例,使用的时候，直接进行require
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:44:06
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-17 22:33:28
 */
export default class BaseService {
  constructor(modelEntity) {
    this.modelEntity = modelEntity;
  }

  async create(entity) {
    return this.modelEntity.create(entity);
  }

  async update(entity) {
    return this.modelEntity.update(entity, {
      where: {
        id: entity
      }
    });
  }

  async findOneById(id) {
    return this.modelEntity.findOne({
      where: { id }
    });
  }

  async deleteById(id) {
    return this.modelEntity.update(
      {
        delete_time: new Date().getTime()
      },
      {
        where: { id }
      }
    );
  }

  async destroyById(id) {
    return this.modelEntity.destroy({
      where: { id }
    });
  }
}
