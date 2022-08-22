import userController from '../controller/user.controller';
import validateData from '../common/validate-data';
import userRule from '../common/validate-data/user.rule';

/**
 * 用户模块路由
 * @param userRouter
 */
export default (userRouter) => {
  userRouter.post(
    '/user',
    validateData(userRule.createUserRule, 'body'),
    userController.createUser
  );
  userRouter.post(
    '/user/info',
    validateData(userRule.updateUserRule, 'body'),
    userController.updateUser
  );
  userRouter.post(
    '/user/destroy',
    validateData(userRule.deleteUserRule, 'body'),
    userController.destroyUserById
  );
  userRouter.post(
    '/user/delete',
    userRule.destroyUserRule,
    userController.deleteUserById
  );
  return userRouter;
};
