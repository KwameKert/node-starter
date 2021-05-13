import Sequelize from 'sequelize';

import sequelize from '../../db';
import constants from '../../config/constants';

export const USER_MODEL = 'users';

const User = sequelize.define(USER_MODEL, {
  id: { type: Sequelize.STRING, primaryKey: true },

  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  password: { type: Sequelize.STRING },

});


export default User;