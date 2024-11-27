'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id_produto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_produto: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      descricao_produto: {
        type: Sequelize.TEXT,
      },
      preco_produto: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      quantidade_estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoria_produto: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      data_adicionado: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};