'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insere dados na tabela 'Products'
    await queryInterface.bulkInsert('Produto', [
      {
        nome: 'Produto A',
        descricao: 'Descrição do Produto A',
        preco: 19.99,
        estoque: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Produto B',
        descricao: 'Descrição do Produto B',
        preco: 29.99,
        estoque: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Produto C',
        descricao: 'Descrição do Produto C',
        preco: 49.99,
        estoque: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove todos os dados da tabela 'Products'
    await queryInterface.bulkDelete('Produto', null, {});
  }
};
