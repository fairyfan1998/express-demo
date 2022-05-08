/*
 * @Description: 
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 00:00:42
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 00:04:07
 */
'use strict'

/**
 * 项目路由的健康检查
 * @param {Object} req 请求对象
 * @param {Object} res 请求响应对象
 * @param {*} next 方法，中间件链式调用时使用
 */
async function checkRouterHealth(req,res,next){
    
    // 
    return next({
        code:200
    })
    
}

module.exports={
    checkRouterHealth
}