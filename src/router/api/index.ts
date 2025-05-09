import express from 'express';
import { Router } from 'express';
import userRouter from './user/index';

const router: Router = express.Router();

router.use('/user', userRouter);

export default router;
