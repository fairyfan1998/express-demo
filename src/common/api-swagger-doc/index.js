import expressJSDocSwagger from 'express-jsdoc-swagger';
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

const options = {
  info: {
    version: '1.0.0',
    title: 'Albums store',
    license: {
      name: 'MIT'
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
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: '../../controller/*.js',
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
  expressJSDocSwagger(app)(options);
  // expressSwaggerGenerator(app)(swaggerOptions);
  logger.info(
    `api swagger docs listening at: ${dataTransform.getApiSwaggerPath()}`
  );
  logger.info(
    `api swagger json data at: ${dataTransform.getApiSwaggerJSONPath()}`
  );
};
