import { loggerColor, loggerProjectName } from './constant-data';

/**
 * 日志封装
 */
export default {
  info(message) {
    console.log(
      `[${loggerProjectName}]: ${loggerColor.blue[0]}${message}${loggerColor.blue[1]}`
    );
  },

  error(message) {
    console.error(
      `[${loggerProjectName}]: ${loggerColor.red[0]}${message}${loggerColor.red[1]}`
    );
  },

  warm(message) {
    console.warn(
      `[${loggerProjectName}]:${loggerColor.yellow[0]}${message}${loggerColor.yellow[1]}`
    );
  }
};
