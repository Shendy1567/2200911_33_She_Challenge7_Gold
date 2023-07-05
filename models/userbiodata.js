'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserBiodata.belongsTo(models.UserGame, {
        constraints: false,
        foreignKey: "userGameId"
      });
    }
  }
  UserBiodata.init({
    userGameId: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    city: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserBiodata',
  });
  return UserBiodata;
};