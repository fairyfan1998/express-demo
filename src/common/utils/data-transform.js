/**
 * 格式化时间
 * @param date
 */
import globalConfig from '../../../global-config';

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
  }
};
