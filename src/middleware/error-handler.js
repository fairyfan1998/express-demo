import dataResponse from '../common/utils/data-response';

/**
 * 统一错误处理【返回响应前处理】
 * @param error
 * @param req
 * @param res
 * @param next
 */
export default function (error, req, res, next) {
  console.log(1212, 'error-handle--start');
  if (error != null) {
    const { status, message } = error;
    res.send(dataResponse.returnFormat(false, message, status));
  }
  console.log(1212, 'error-handle---end');
  next();
}
