#!/bin/bash
## 功能：本地前后端项目构建、打包镜像，上传docker仓库
## 参考：https://blog.csdn.net/Dontla/article/details/125210694
## 作者：Rong姐姐好可爱
## 使用示例：bash xxx.sh 容器名称  版本号
##    -  bash build_image.sh oauth_login 0.0.1
##


npm run build
