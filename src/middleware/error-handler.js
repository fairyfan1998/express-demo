import dataResponse from '../common/utils/data-response';
import logger from '../common/utils/logger';
import { responseHeader } from '../common/utils/constant-data';

/**
 * 统一错误处理【返回响应前处理】
 * @param error
 * @param req
 * @param res
 * @param next
 */
export default async function (error, req, res, next) {
  console.log(1212, 'error-handle--start');
  if (error != null) {
    const { status, message } = typeof error === 'object' ? error : JSON.parse(error);
    res.json(dataResponse.returnFormat(false, message, status));
  }
  console.log(1212, 'error-handle');
  try {
    // await next();
  }
  catch (err) {
    logger.info('try-catch in error-handler', err);
  }
  finally {
    res.set(responseHeader);
    res.status(200).end();
  }
}
