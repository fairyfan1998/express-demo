/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 00:00:42
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 00:04:07
 */

import dataResponse from '../common/utils/data-response';

export default {

  async checkMysql(req, res) {
    res.send(dataResponse.returnFormat());
  }
};
