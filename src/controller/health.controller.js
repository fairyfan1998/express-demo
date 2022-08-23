/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 00:00:42
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 00:04:07
 */

import dataResponse from '../common/utils/data-response';
import redisCache from '../common/redis-cache';
import database from '../database';

export default {
  async checkMysql(req, res) {
    res.send(dataResponse.returnFormat(!!database.sequelizeInstance));
  },

  async checkRedis(req, res) {
    res.json(dataResponse.returnFormat(!!redisCache.redisInstance));
  }
};
