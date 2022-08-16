'use strict';
/*
 * @Description: 项目启动入口
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:14:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-15 23:38:15
 */

const express=require('express');


// 获取express对象
const app=express()

app.use('/',(req,res,next)=>{
    const query=req.query;
    const body=req.body;
    const params=req.params
    console.log('query:',query)

    // 返回结果

    res.send({
        code:200
    })
})

// 启动项目
app.listen('3000','127.0.0.1',res=>{
    console.log(res)
    console.log(process.env.NODE_ENV)
    console.log('express project started at : http://127.0.0.1:3000')
})




