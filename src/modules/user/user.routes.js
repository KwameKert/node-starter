import { Router } from 'express';
import * as userController from './user.controller';


const UserRouter = Router();

UserRouter.get('/',userController.register)

export default UserRouter;