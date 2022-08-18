const express = require('express');
const UserController = require('../controller/user.controller');

const userRouter = express.Router();
const userController = new UserController();
userRouter.get('/user/:id', userController.test);

module.exports = userRouter;
