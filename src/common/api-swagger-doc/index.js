import expressSwaggerGenerator from 'express-swagger-generator';
import globalConfig from '../../../global-config';
import logger from '../utils/logger';
import dataTransform from '../utils/data-transform';

/**
 * 配置 swagger-jsdoc
 */
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      description: 'express-demo 接口文档',
      title: 'Swagger - express-demo',
      version: '1.0.0'
    },
    host: dataTransform.getServiceStartPath(),
    basePath: '/',
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
    url: globalConfig.swagger.apiDocRouter,
    docs: globalConfig.swagger.apiDocJSONRouter // swagger文件 api
  },
  basedir: __dirname, // app absolute path
  files: ['../../controller/*.js'] // Path to the API handle folder
};

export default (app) => {
  console.log(swaggerOptions);
  expressSwaggerGenerator(app)(swaggerOptions);
  logger.info(
    `api swagger docs listening at: ${dataTransform.getApiSwaggerPath()}`
  );
  logger.info(
    `api swagger json data at: ${dataTransform.getApiSwaggerJSONPath()}`
  );
};
