export default class {
  constructor(redis) {
    this.redis = redis;
  }

  async get(key) {
    return this.redis.get(key);
  }
}
