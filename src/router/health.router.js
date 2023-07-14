import healthController from '../controller/health.controller';

export default (healthRouter) => {
  healthRouter.get('/mysql', healthController.checkMysql);
  healthRouter.get('/redis', healthController.checkRedis);
  return healthRouter;
};
