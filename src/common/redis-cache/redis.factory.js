"use strict";
/**
 * 参考：https://www.npmjs.com/package/ioredis
 */
const redisInstance = Symbol("redis#instance");
const Redis = require("ioredis");

class RedisFactory {
  constructor(options) {
    this.options = options;
  }

  getSingleInstance() {
    const { options } = this;
    if (this[redisInstance] === null) {
      this[redisInstance] = new Redis(options);
    }
    return this[redisInstance];
  }
}

module.exports = RedisFactory;
