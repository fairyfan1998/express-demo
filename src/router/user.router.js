import userController from '../controller/user.controller';

/**
 * 用户模块路由
 * @param userRouter
 */
export default (userRouter) => {
  userRouter.get('/user', userController.createUser);
  userRouter.post('/user/info', userController.updateUser);
  userRouter.post('/user/destroy', userController.destroyUserById);
  userRouter.post('/user/delete', userController.deleteUserById);
  return userRouter;
};
