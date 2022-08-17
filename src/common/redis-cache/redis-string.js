"use strict";

class RedisString {
  constructor(redis) {
    this.redis = redis;
  }

  get(key) {
    return this.redis.get(key);
  }
}

module.exports = RedisString;
