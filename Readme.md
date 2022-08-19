<!--
 * @Description: 项目文档说明
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 22:33:09
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-14 23:54:22
-->

## express-demo

> 如你所见，这是一个基于Express框架构建的基本项目结构，仅仅提供demo，欢迎补充

## 设计思想

采用经典的MVC模式，结合多环境部署的特点进行整理

## 项目结构

```text
├── Readme.md       ## 说明文档
├── app.js          ## 启动文件
├── config          ## 配置文件
│   ├── default.js  ## 本地默认配置
│   ├── prod.js     ## 正式环境配置
│   └── index.js     ## 测试环境配置
├── controller      ## MVC分层中的控制器部分
├── model           ## 数据库模型文件，配合ORM框架使用
├── node_modules    ## 项目依赖的npm包
├── package-lock.json   ##npm依赖文件
├── router          ## 项目路由文件
├── service         ## 业务逻辑层，区分具体业务，实现对应方法
└── static          ## 静态资源
```