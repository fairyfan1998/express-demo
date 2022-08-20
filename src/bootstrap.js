/*
 * @Description: 项目启动入口
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:14:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:38:15
 */
import express from 'express';
import globalConfig from '../global-config';
import router from './router';
import apiSwaggerDoc from './common/api-swagger-doc';
import { getServiceStartPath } from './common/utils/data-transform';
import logger from './common/utils/logger';

const app = express();
const { port, hostname } = globalConfig;
export default function () {
  console.log(globalConfig);

  // 中间件使用
  // app.use(loggerHandler);
  router(app, express.Router());
  apiSwaggerDoc(app);

  app.listen(port, hostname, () => {
    logger.info(`express-demo started at: ${getServiceStartPath()}`);
  });
}
