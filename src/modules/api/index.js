import { Router } from 'express';
import UserRouter from '../user/user.routes';


const apiRouter = Router();



apiRouter.use('/user', UserRouter);


export default apiRouter;