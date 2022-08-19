/**
 * @param result
 * @param message
 * @param code
 * @returns {{result, code, message}}
 */

export default class DataResponse {
    /**
     * 统一参数返回
     * @param result
     * @param message
     * @param code
     */
    returnFormat(result, message, code) {
        return {result, message, code};
    }

    /**
     * 统一抛出异常
     * @param code
     * @param message
     */
    throwFormat(code = 500, message = '服务端异常') {
        throw new Error({code, message});
    }
}
