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

  /**
   * 创建
   * @param entity
   */
  async create(entity) {
    return this.modelEntity.create(entity);
  }

  /**
   * 更新
   * @param entity
   */
  async update(entity) {
    return this.modelEntity.update(entity, {
      where: {
        id: entity
      }
    });
  }

  /**
   * 根据主键查询
   * @param id
   */
  async findOneById(id) {
    return this.modelEntity.findOne({
      where: { id }
    });
  }

  /**
   * 根据主键逻辑删除
   * @param id
   */
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

  /**
   * 根据主键物理删除
   * @param id
   */
  async destroyById(id) {
    return this.modelEntity.destroy({
      where: { id }
    });
  }
}
