'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Output extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Output.belongsTo(models.Interactuable, { foreignKey: "id" });
      // InteractuableAction.belongsTo(models.Action, { foreignKey: "id" });
    }
  }
  Output.init({
    output: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Output',
  });
  return Output;
};