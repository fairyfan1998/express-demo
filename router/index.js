'use strict';
/*
 * @Description: 
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:54:46
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:55:03
 */

const express = require('express');

const router = express.Router();

fs.readdirSync(__dirname)
  .filter(file => {
      return file.indexOf('.') !== -1 && file !== 'index.js';
  })
  .forEach(file => {
      require(path.join(__dirname, file))(router);
  })

module.exports = router;
