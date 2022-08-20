import UserService from '../service/user.service';
import database from '../database';

const userService = new UserService(database.userEntityRepo);

/**
 * 创建用户
 * @route post /api/v1/user
 * @summary 创建用户
 * @group user - 用户相关
 * @param {string} email.params.required - username or email - eg: user@domain
 * @param {string} password.body.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
export async function createUser(req, res) {
  const user = this.req.body;
  await userService.create(user);
}

/**
 * 1213212
 * @route GET /user/test
 * @group user - Operations about user
 * @operationId abc - 我是operationId
 * @summary 测试
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
export async function updateUser(req, res) {
  const user = this.req.body;
  await userService.update(user);
}

export async function deleteUserById(req, res) {
  const { id } = this.req.body;
  await userService.destroyById(id);
}

export async function destroyUserById(req, res) {
  const { id } = this.req.body;
  await userService.destroyById(id);
}
