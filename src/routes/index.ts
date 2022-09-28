import { Router } from 'express';
import userRouter from './userRouter.js';

const router: Router = Router();
router.use('/user', userRouter);

export default router;
