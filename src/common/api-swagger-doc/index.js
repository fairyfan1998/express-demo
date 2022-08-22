import expressJSDocSwagger from 'express-jsdoc-swagger';
import globalConfig from '../../../global-config';
import logger from '../utils/logger';
import dataTransform from '../utils/data-transform';

/**
 * 配置 swagger-jsdoc
 */

const swaggerOptions = {
  info: {
    title: 'express-demo 接口文档',
    description: 'express-demo 接口文档',
    version: '0.0.1',
    license: {
      name: 'MIT',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    },
    contact: {
      name: '联系作者',
      url: 'https://github.com/142vip',
      email: 'fairy_vip@2925.com'
    }
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic'
    }
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: __dirname,
  // 需要扫描的文件
  filesPattern: ['../../controller/*.js', '../../router/*.router.js'],
  // URL where SwaggerUI will be rendered
  swaggerUIPath: globalConfig.swagger.apiDocRouter,
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: true,
  // Open API JSON Docs endpoint.
  apiDocsPath: globalConfig.swagger.apiDocJSONRouter,
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
  // multiple option in case you want more that one instance
  multiple: true
};

export default (app) => {
  console.log(swaggerOptions);
  expressJSDocSwagger(app)(swaggerOptions);
  logger.info(
    `api swagger docs listening at: ${dataTransform.getApiSwaggerPath()}`
  );
  logger.info(
    `api swagger json data at: ${dataTransform.getApiSwaggerJSONPath()}`
  );
};
