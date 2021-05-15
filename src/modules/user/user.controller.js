import {Users} from '../../db/models';
import HTTPStatus from 'http-status';
import { v4 as uuidv4 } from 'uuid';

//const {Users}  = model;

export const register = async (req, res, next) => {
    try {
      let apiKey = uuidv4();
      let newapiKey = apiKey.replaceAll('-','');
      
      const user = await Users.create({
        username: req.body.username,
        password:req.body.password,
        email: req.body.email,
        apiKey
      });
     
      return res.status(HTTPStatus.CREATED).send(user);
    } catch (err) {
      if (err) next(err);
    }
  };