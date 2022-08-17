/**
 * 根据环境变量获取对应配置
 * @param nodeEnv
 */

const defaultEnv = require("./default.env");
const testEnv = require("./prod.env");
const prodEnv = require("./test.env");

function getStartConfig(nodeEnv) {
  if (nodeEnv === "development") {
    return defaultEnv;
  }
  if (nodeEnv === "production") {
    return prodEnv;
  }
  if (nodeEnv === "test") {
    return testEnv;
  }
  return defaultEnv;
}

exports.globalConfig = getStartConfig(process.env.NODE_ENV);
