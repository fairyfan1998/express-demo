/*
 * @Description: 项目启动入口
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:14:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:38:15
 */

// 获取express对象

const express = require('express');
const { globalConfig } = require('../config');
const { loggerHandler } = require('./middleware/logger-handler');
const { logger } = require('./common/utils');

const app = express();
const router = express.Router();
// 中间件使用
app.use(loggerHandler);
router.get('/', (req, res) => {
  const { query } = req;
  const { body } = req;
  const { params } = req;
  console.log('query:', query);
  // 返回结果
  res.status(200);
  res.send({
    code: 200
  });
});
router.get('/test', (req, res) => {
  res.send('hello world');
});

// 启动项目
app.listen(globalConfig.port, globalConfig.hostname, () => {
  // console.log(app, app._router);
  logger.info(
    `express-demo started at : http://${globalConfig.hostname}:${globalConfig.port}`
  );
});
