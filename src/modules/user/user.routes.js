import { Router } from 'express';
import * as userController from './user.controller';
//import validate from 'express-validation';
import {registerValidation, loginValidation, validate} from './user.validation';


const UserRouter = Router();

UserRouter.post('/', registerValidation(),validate, userController.register)
UserRouter.post('/login', loginValidation(),validate, userController.login)

export default UserRouter;