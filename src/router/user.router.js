import { Router } from 'express';
import UserController from '../controller/user.controller';

const userRouter = Router();
const userController = new UserController();
userRouter.get('/fix/:id', userController.test);
userRouter.get('/go', (req, res) => {
  // 返回结果
  res.status(200);
  res.send({ code: 2 });
});
userRouter.get('/test', (req, res) => {
  res.send('hello world');
});

export default userRouter;
