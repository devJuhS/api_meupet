'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Produtos extends Model {
        static associate(models) {
            // Define associações aqui, se necessário
        }
    }

    Produtos.init(
      {
        id_produto: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true 
        },
        nome_produto: { 
            type: DataTypes.STRING(120), 
            allowNull: false 
        },
        descricao_produto: { 
            type: DataTypes.TEXT 
        },
        preco_produto: { 
            type: DataTypes.DECIMAL(10, 2), 
            allowNull: false 
        },
        quantidade_estoque: { 
            type: DataTypes.INTEGER, 
            allowNull: false 
        },
        categoria_produto: { 
            type: DataTypes.STRING(120), 
            allowNull: false 
        },
        data_adicionado: { 
            type: DataTypes.DATE 
        },
      },
      {
        sequelize,
        modelName: 'Produtos',
        tableName: 'produtos',
      }
    );

    return Produtos;
};