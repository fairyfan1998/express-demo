FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:12.6.0-alpine
LABEL version="0.0.1" description="express框架示例Demo"
LABEL author="【Github&公众号】：Rong姐姐好可爱" email="fairy@2925.com"
# 创建项目空间
RUN mkdir -p /apps
# 进入 apps
WORKDIR /apps
# 将当前代码文件复制到工作区域
COPY . /apps
## 指定cnpm源下载
#RUN npm install -S
RUN npm install --registry https://registry.npmmirror.com -S
# 暴露端口
EXPOSE 9000
# 项目启动
CMD ["npm","run","pm2-prod"]

