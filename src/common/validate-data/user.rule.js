import joi from 'joi';

export default {
  // 创建用户时，参数校验规则
  createUserRule: {
    username: joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .error(new Error('自定义错误信息')),
    password: joi
      .string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required()
      .error(new Error('password参数异常'))
  },

  // 更新用户时，参数校验规则
  updateUserRule: {
    username: joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .error(new Error('自定义错误信息')),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: joi.string().email()
  },
  deleteUserRule: {
    id: joi.string().required()
  },
  destroyUserRule: {
    id: joi.string().required(),
    access_token: joi.string().required().error(new Error('access_token缺失'))
  }
};
