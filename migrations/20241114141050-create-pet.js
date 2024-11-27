'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_pet: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      sexo_pet: {
        allowNull: false,
        type: Sequelize.ENUM('Macho', 'Fêmea')
      },
      castracao: {
        allowNull: false,
        type: Sequelize.ENUM('Sim', 'Não')
      },
      raca_pet: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      peso_pet: {
        allowNull: false,
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('pets');
  }
};