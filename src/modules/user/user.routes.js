import { Router } from 'express';
import * as userController from './user.controller';


const UserRouter = Router();

UserRouter.post('/',userController.register)

export default UserRouter;