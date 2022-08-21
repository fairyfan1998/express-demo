import joi from 'joi';

// 创建用户时，参数校验规则
export const createUserRule = {
  username: joi
    .string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .error(new Error('自定义错误信息')),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [joi.string(), joi.number()]
};

// 更新用户时，参数校验规则
export const updateUserRule = {
  username: joi
    .string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .error(new Error('自定义错误信息')),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: joi.string().email()
};
