import express from 'express';
import globalConfig from '../global-config';
import { logger } from './common/utils';
import router from './router';
import apiSwaggerDoc from './common/api-swagger-doc';
/*
 * @Description: 项目启动入口
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:14:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:38:15
 */

export default function () {
  const app = express();
  // 中间件使用
  // app.use(loggerHandler);
  router(app);
  apiSwaggerDoc(app);
  console.log(globalConfig);

  app.listen(globalConfig.port, globalConfig.hostname, () => {
    logger.info(
      `express-demo started at : http://${globalConfig.hostname}:${globalConfig.port}
            `
    );
  });
}
