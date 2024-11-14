'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  produto.init({
    nome_produto: DataTypes.STRING,
    descricao_produto: DataTypes.TEXT,
    preco_produto: DataTypes.DECIMAL,
    quantidade_estoque: DataTypes.INTEGER,
    categoria_produto: DataTypes.STRING,
    data_adicionado: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'produto',
  });
  return produto;
};