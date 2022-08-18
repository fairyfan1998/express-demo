/**
 * 参考：https://www.npmjs.com/package/ioredis
 */
import Redis from 'ioredis';

const redisInstance = Symbol('redis#instance');

export default class {
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
