import { Router } from 'express';
import * as userController from './user.controller';
import validate from 'express-validation';
import userValidation from './user.validation';


const UserRouter = Router();

UserRouter.post('/', validate(userValidation), userController.register)

export default UserRouter;