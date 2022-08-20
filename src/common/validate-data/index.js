import joi from 'joi';
import dataResponse from '../utils/data-response';

/**
 * 参数校验
 * @param data 需要校验的参数规则
 * @param content body|query|params
 */
export default function (data = {}, content = 'body') {
  const schema = joi.object(data);
  return async function (req, res, next) {
    try {
      await schema.validateAsync(req[content], data);
      next();
    }
    catch (error) {
      // 区分环境
      const message = process.env.NODE_ENV === 'prod' ? '参数错误' : error.message;
      res.send(dataResponse.returnFormat(false, message, 93));
    }
  };
}
