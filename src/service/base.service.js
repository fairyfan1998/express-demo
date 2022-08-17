"use strict";

class BaseService {
  constructor(modelEntity) {
    this.modelEntity = modelEntity;
  }

  async create(entity) {
    return this.modelEntity.create(entity);
  }

  async update() {}

  async findOneById(id) {}

  async deleteById() {}

  async destroyById(id) {
    return this.modelEntity.destroy({
      where: { id },
    });
  }
}

module.exports = BaseService;
