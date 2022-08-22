import express from 'express';
import bodyParser from 'body-parser';
import globalConfig from '../global-config';
import router from './router';
import logger from './common/utils/logger';
import dataTransform from './common/utils/data-transform';
import errorHandler from './middleware/error-handler';
import apiSwaggerDoc from './common/api-swagger-doc';
import { MaxResponseTimeOut, responseHeader } from './common/utils/constants';
import loggerHandler from './middleware/logger-handler';
import dataResponse from './common/utils/data-response';

/*
 * @Description: 项目启动入口
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:14:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:38:15
 */
const expressListEndpoints = require('express-list-endpoints');

const app = express();
const { port, hostname } = globalConfig;

export default function () {
  console.log(globalConfig);

  // 路由请求超时的中间件
  app.use((req, res, next) => {
    // 这里必须是Response响应的定时器【10秒】
    res.setTimeout(MaxResponseTimeOut, () => res.json(dataResponse.returnFormat(false, '请求超时，服务端异常')));
    next();
  });

  app.use(loggerHandler);

  /** ----------------------------- 请求参数处理 ------------------------------ */
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  /** ----------------------------- 请求参数处理 ------------------------------ */

  app.use((req, res, next) => {
    res.set(responseHeader);
    res.status(200);
    next();
  });
  router(app, express.Router());
  /** ----------------------------- 统一错误处理 ------------------------------ */
  app.use(errorHandler);
  apiSwaggerDoc(app);

  app.listen(port, hostname, () => {
    logger.info(
      `express-demo started at: ${dataTransform.getServiceStartPath()}`
    );
  });

  // 输出路由日志
  dataTransform.printRegisteredRouter(expressListEndpoints(app));
}
