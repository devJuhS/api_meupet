'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insere dados na tabela 'Users'
    await queryInterface.bulkInsert('Users', [
      {
        nome_user: 'Alice',
        email_user: 'alice@example.com',
        password: 'senha123',  // Idealmente, utilize hashes de senha em um projeto real
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_user: 'Bob',
        email_user: 'bob@example.com',
        password: 'senha456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_user: 'Carol',
        email_user: 'carol@example.com',
        password: 'senha789',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove todos os dados da tabela 'Users'
    await queryInterface.bulkDelete('Users', null, {});
  }
};
