
import {
  Model
}  from 'sequelize';

const PROTECTED_ATTRIBUTES = ['password'];

module.exports =   (sequelize, DataTypes) => {
  class Users extends Model {
    toJSON(){

      const attributes = {...this.get()};

      for(const a of PROTECTED_ATTRIBUTES){
        delete attributes[a];
      }
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};