import User from './user.model';

export const register = async (req, res, next) => {
    try {
      
      const user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: invite.email,
      });
      console.log("im here");
    //  const u = user.auth();
      console.log(user);
     
      return res.status(200).json(u);
    } catch (err) {
      if (err) next(err);
    }
  };