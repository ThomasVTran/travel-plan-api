const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Traveller model
class Traveller extends Model {}

// create fields/columns for Traveller model
Traveller.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveller'
  }
);

module.exports = Traveller;
