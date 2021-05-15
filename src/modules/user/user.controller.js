import model from '../../db/models';
const {Users}  = model;

export const register = async (req, res, next) => {
    try {

      const user = await Users.create({
        username: req.username,
        password:req.password,
        email: req.email
      });
     
      return res.status(200).send(user);
    } catch (err) {
      if (err) next(err);
    }
  };