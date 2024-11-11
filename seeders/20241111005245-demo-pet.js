'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insere dados na tabela 'Pets'
    await queryInterface.bulkInsert('Pets', [
      {
        nome: 'Rex',
        especie: 'Cachorro',
        idade: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mimi',
        especie: 'Gato',
        idade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Buddy',
        especie: 'cachorro',
        idade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove todos os dados da tabela 'Pets'
    await queryInterface.bulkDelete('Pets', null, {});
  }
};
