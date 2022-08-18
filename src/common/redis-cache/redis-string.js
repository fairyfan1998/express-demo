export default class {
  constructor(redis) {
    this.redis = redis;
  }

  async test(key) {
    return this.redis.get(key);
  }
}
