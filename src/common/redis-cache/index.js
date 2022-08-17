"use strict";

const RedisFactory = require("./redis.factory");
const { globalConfig } = require("../../../config");
const RedisString = require("./redis-string");
const redisInstance = new RedisFactory(globalConfig.redis).getSingleInstance();

module.exports = {
  redisString: new RedisString(redisInstance)
};
