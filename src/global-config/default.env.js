export default {
  port: 8000,
  hostname: '127.0.0.1',
  sequelize: {
    username: 'root',
    password: '123456',
    database: 'express-demo',
    options: {
      dialect: 'mysql'
    }
  },
  redis: {
    port: 6379,
    host: '127.0.0.1',
    username: 'default',
    password: '',
    db: 10
  },
  swagger: {
    apiDocRouter: '/doc',
    apiDocJSONRouter: '/api-swagger.json'
  }
};
