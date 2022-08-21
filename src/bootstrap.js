/*
 * @Description: 项目启动入口
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:14:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:38:15
 */
import express from 'express';
import bodyParser from 'body-parser';
import globalConfig from '../global-config';
import router from './router';
import logger from './common/utils/logger';
import dataTransform from './common/utils/data-transform';
import errorHandler from './middleware/error-handler';
import apiSwaggerDoc from './common/api-swagger-doc';
import { responseHeader } from './common/utils/constant-data';

const expressListEndpoints = require('express-list-endpoints');

const app = express();
const { port, hostname } = globalConfig;

export default function () {
  console.log(globalConfig);
  /* --------------------请求参数处理---------------*/

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.set(responseHeader);
    res.status(200);
    next();
  });
  router(app, express.Router());
  /* --------------------统一错误处理---------------*/
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
