import expressSwaggerGenerator from 'express-swagger-generator';
import globalConfig from '../../../global-config';

/**
 * swagger配置
 */
const swaggerConfig = {
  swaggerDefinition: {
    info: {
      description: 'express-demo 接口文档',
      title: 'Swagger - express-demo',
      version: '1.0.0'
    },
    host: `http://${globalConfig.hostname}:${globalConfig.port}`,
    basePath: '',
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: ''
      }
    }
  },
  route: {
    url: '/doc',
    docs: '/api-swagger.json' // swagger文件 api
  },
  basedir: __dirname, // app absolute path
  files: ['../../../controller/**/**.js'] // Path to the API handle folder
};

export default (app) => expressSwaggerGenerator(app)(swaggerConfig);
