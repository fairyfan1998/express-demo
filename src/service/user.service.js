"use strict";

const { userEntity } = require("../database");

/**
 * 用户实体操作类，专注业务逻辑
 */
class UserService {
  constructor() {}

  async createUser(user) {
    return userEntity.create(user);
  }

  async updateUser(user) {
    return userEntity.update(user);
  }

  /**
   * 查询单条用户信息
   * @param id
   */
  async findUserById(id) {
    return userEntity.findOne({
      raw: true,
      where: { id },
    });
  }

  /**
   * 查询用户所有信息
   */
  async findUserList() {
    return userEntity.findAndCountAll({
      raw: true,
    });
  }

  /**
   * 逻辑删除，更新删除时间
   * @param id
   */
  async deleteUserById(id) {
    return userEntity.update(
      {
        delete_time: new Date().getTime(),
      },
      {
        where: { id },
      }
    );
  }

  /**
   * 物理删除
   * @param id
   */
  async destroyUserById(id) {
    return userEntity.destroy({
      where: { id },
    });
  }
}

module.exports = UserService;
