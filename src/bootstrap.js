import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
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
  app.use('/test', (req, res) => res.send({ code: 1 }));

  apiSwaggerDoc(app);

  // app.use('/doc', express.static('view'));

  console.log(globalConfig);

  // 配置 swagger-jsdoc
  const options = {
    definition: {
      // swagger 采用的 openapi 版本 不用改
      openapi: '3.0.0',
      // swagger 页面基本信息 自由发挥
      info: {
        title: 'Express Template',
        version: '1.0.0'
      }
    },
    // 重点，指定 swagger-jsdoc 去哪个路由下收集 swagger 注释
    apis: [path.join(__dirname, '/router/*.js')]
  };
  const swaggerSpec = swaggerJSDoc(options);

  // 开放 swagger 相关接口，
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  // 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.listen(globalConfig.port, globalConfig.hostname, () => {
    logger.info(
      `express-demo started at : http://${globalConfig.hostname}:${globalConfig.port}
            `
    );
  });
}
