/**
 * 格式化时间
 * @param date
 */
import jwt from 'jsonwebtoken';
import stringRandom from 'string-random';
import { v1 } from 'uuid';
import crypto from 'crypto';
import globalConfig from '../../../global-config';
import logger from './logger';
import { accessTokenSecret, md5Secret, randomStrLetterKey } from './constants';

export default {
  formatDateTime(date) {
    const currentTime = date == null ? new Date() : new Date(date);
    const y = currentTime.getFullYear();
    let m = currentTime.getMonth() + 1;
    m = m < 10 ? `0${m}` : m;
    let d = currentTime.getDate();
    d = d < 10 ? `0${d}` : d;
    let h = currentTime.getHours();
    h = h < 10 ? `0${h}` : h;
    let minute = currentTime.getMinutes();
    minute = minute < 10 ? `0${minute}` : minute;
    let second = currentTime.getSeconds();
    second = second < 10 ? `0${second}` : second;
    return `${y}-${m}-${d} ${h}:${minute}:${second}`;
  },
  getServiceStartPath() {
    return `http://${globalConfig.hostname}:${globalConfig.port}`;
  },
  getApiSwaggerPath() {
    return `http://${globalConfig.hostname}:${globalConfig.port}${globalConfig.swagger.apiDocRouter}`;
  },
  getApiSwaggerJSONPath() {
    return `http://${globalConfig.hostname}:${globalConfig.port}${globalConfig.swagger.apiDocJSONRouter}`;
  },

  /**
   * 打印路由
   */
  printRegisteredRouter(routerList) {
    routerList.forEach(({ path, methods, middlewares }) => {
      methods.forEach((method) => {
        logger.info(`${method} ${path}`);
      });
    });
  },
  /**
   * 登录会话加密
   * @param  data 登录会话值
   * @param  time 过期时间 单位秒
   */
  accessTokenEncrypt(data, time) {
    // data加密数据，time过期时间
    return jwt.sign(data, accessTokenSecret, {
      expiresIn: time
    });
  },

  /**
   * token解密，判断当前token值是否有效
   * @param  accessToken
   */
  accessTokenDecrypt(accessToken) {
    try {
      const resultData = jwt.verify(accessToken, accessTokenSecret);
      return resultData;
    }
    catch (e) {
      return false;
    }
  },

  /**
   * md5加密
   * eg:123456--->deda065fff00b5c98bba3a1d8c25c5a1
   * @param  password
   */
  md5Encrypt(password) {
    const str = JSON.stringify(password); // 明文
    const cipher = crypto.createCipher('aes192', md5Secret);
    let enc = cipher.update(str, 'utf8', 'hex'); // 编码方式从utf-8转为hex;
    enc += cipher.final('hex'); // 编码方式从转为hex;
    // 输出加密后结果
    return enc;
  },

  /**
   * md5解密
   * eg:deda065fff00b5c98bba3a1d8c25c5a1---->123456
   * @param md5pwd
   */
  md5Decrypt(md5pwd) {
    const decipher = crypto.createDecipher('aes192', md5Secret);
    let dec = decipher.update(md5pwd, 'hex', 'utf8'); // 编码方式从hex转为utf-8;
    dec += decipher.final('utf8'); // 编码方式从utf-8;
    // 解密后的结果
    return JSON.parse(dec);
  },

  /**
   * 数据库表 随机字符串主键
   */
  getRandomDataBaseID() {
    return v1();
  },

  /**
   * 截取access_token,去掉Bearer
   * @param accessToken
   */
  splitAccessTokenInHeader(accessToken) {
    return accessToken.indexOf('Bearer ') !== -1
      ? accessToken.split('Bearer ')[1]
      : accessToken;
  },

  /**
   * 数据库表 随机字符串主键 16位  特殊处理
   */
  getSpecialRandomDataBaseID16() {
    return stringRandom(16, { letters: randomStrLetterKey });
  },

  /**
   * 生成redis随机时间 1-
   * @param  time
   */
  getRandomExpireTime(time = 5) {
    return Math.ceil(60 * time * Math.random());
  },

  /**
   * 获取随机过期时间，毫秒
   * @param expiresTime 过期时间
   */
  getOauthRandomExpiredTime(expiresTime) {
    return new Date(expiresTime).getTime() - new Date().getTime();
  }
};
