'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class States extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
States.init({  
  id: {
    type: DataTypes.INTEGER(20),
    autoIncrement: true,
    primaryKey: true
   },
    code: DataTypes.STRING(3),
    name: DataTypes.STRING(40),
    sortName: DataTypes.STRING(40),
    country_code: DataTypes.STRING(4),
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    },
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'states',
    defaultScope:{
      attributes:{
        exclude: ['createdAt','updatedAt']
      }
    }
  });
  
  return States;  
};