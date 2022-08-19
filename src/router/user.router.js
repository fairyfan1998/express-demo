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

/**
 * @swagger
 * /hello:
 *   get:
 *     tags:
 *       - 测试
 *     summary: GET 测试
 *     description: 用于测试基础 GET 请求的接口
 *     responses:
 *       200:
 *         description: 【成功】 返回 world
 */
userRouter.get('/test', (req, res) => {});

export default userRouter;
