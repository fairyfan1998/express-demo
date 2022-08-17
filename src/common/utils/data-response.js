/**
 * 统一参数返回
 * @param result
 * @param message
 * @param code
 * @returns {{result, code, message}}
 */
export function returnFormat(result, message, code) {
  return { result, message, code };
}
