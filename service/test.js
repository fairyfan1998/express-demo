/*
 * @Description: test service层方法封装示例,使用的时候，直接进行require
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-15 23:44:06
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-17 22:33:28
 */
'use strict';

/**
 * 
 * @param {Object} opts 参数对象
 */
async function doSomething(opts){
    return opts;
}



// 方法导出

module.exports={
    doSomething
}