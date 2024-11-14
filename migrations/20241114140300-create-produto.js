'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_produto: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      descricao_produto: {
        allowNull: false,
        type: Sequelize.TEXT(100)
      },
      preco_produto: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      quantidade_estoque: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      categoria_produto: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      data_adicionado: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};