import dataResponse from '../common/utils/data-response';

/**
 * 统一错误处理【返回响应前处理】
 * @param error
 * @param req
 * @param res
 * @param next
 */
export default function errorHandler(error, req, res, next) {
  if (error != null) {
    const { status, message } = error;
    res.send(dataResponse.returnFormat(false, message, status));
  }
  next();
}
