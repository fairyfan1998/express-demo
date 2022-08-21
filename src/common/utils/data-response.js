export default {
  /**
   * 统一参数返回
   * @param result
   * @param message
   * @param code
   */
  returnFormat(result = true, message = '请求成功', code = 200) {
    return { result, message, code };
  },

  /**
   * 统一抛出异常
   * @param status
   * @param message
   */
  throwFormat(status = 500, message = '服务端异常') {
    throw new Error({ status, message });
    // throw new Error({ status, message });
  }
};
