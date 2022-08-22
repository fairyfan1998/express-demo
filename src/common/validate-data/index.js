import joi from 'joi';
import dataResponse from '../utils/data-response';

/**
 * 校验类型
 */
export const validateType = {
  POST: 'body',
  PARAMS: 'params',
  QUERY: 'query'
};

/**
 * 参数校验
 * @param schemaRule 需要校验的参数规则
 * @param {string} data req.body|req.query|req.params
 */
export function validateData(schemaRule = {}, key = validateType.POST) {
  return async function (req, res, next) {
    try {
      const schema = joi.object(schemaRule);
      await schema.validateAsync(req[key], schemaRule);
      next();
    }
    catch (error) {
      // 区分环境
      const message = process.env.NODE_ENV === 'prod' ? '参数错误' : error.message;
      res.send(dataResponse.returnFormat(false, message, 93));
    }
  };
}
