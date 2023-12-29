'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Interactuable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Interactuable.belongsToMany(models.Action, { through: "interactuableactions" });
      // define association here
    }
  }
  Interactuable.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interactuable',
  });
  return Interactuable;
};