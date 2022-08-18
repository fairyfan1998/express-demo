/**
 * 参考：https://www.npmjs.com/package/ioredis
 */
import Redis from 'ioredis';

const redisInstance = Symbol('redis#instance');

export default class {
  constructor(options) {
    this.options = options;
  }

  /**
   * 创建单例，避免重复连接
   */
  getSingleInstance() {
    const { options } = this;
    if (this[redisInstance] === null) {
      this[redisInstance] = new Redis(options);
    }
    return this[redisInstance];
  }
}
