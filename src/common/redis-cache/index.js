import RedisString from './redis-string';
import RedisFactory from './redis.factory';
import globalConfig from '../../../global-config';

const redisInstance = new RedisFactory(globalConfig.redis).getSingleInstance();
export default {
  redisString: new RedisString(redisInstance)
};
