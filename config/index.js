/**
 * 根据环境变量获取对应配置
 * @param nodeEnv
 */
import prodEnv from './prod.env';
import testEnv from './test.env';
import defaultEnv from './default.env';

function getStartConfig(nodeEnv) {
  if (nodeEnv === 'development') {
    return defaultEnv;
  }
  if (nodeEnv === 'production') {
    return prodEnv;
  }
  if (nodeEnv === 'test') {
    return testEnv;
  }
  return defaultEnv;
}

export const globalConfig = getStartConfig(process.env.NODE_ENV);
