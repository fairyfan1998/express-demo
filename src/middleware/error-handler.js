import dataResponse from '../common/utils/data-response';

/**
 * 统一错误处理【返回响应前处理】
 * @param error
 * @param req
 * @param res
 * @param next
 */
export default function (error, req, res, next) {
  console.log('------error-handle--start------');
  console.log(error);
  if (error != null) {
    const { status, message } = error;
    res.send(dataResponse.returnFormat(false, message, status));
  }
  console.log('------error-handle---end------');
  next();
}
