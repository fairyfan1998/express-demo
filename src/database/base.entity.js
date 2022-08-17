"use strict";

class BaseEntity {
  async create() {}

  async update() {}

  async findOneById(id) {}

  async deleteById() {}

  async destroyById(id) {
    return T.destroy({
      where: { id },
    });
  }
}
