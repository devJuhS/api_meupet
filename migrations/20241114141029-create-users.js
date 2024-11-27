'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_user: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      cpf_user: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(11)
      },
      cel_user: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(11)
      },
      tel_user: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(11)
      },
      email_user: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(100)
      },
      genero_user: {
        allowNull: false,
        type: Sequelize.ENUM('Masculino', 'Feminino', 'Outro')
      },
      dt_nasc_user: {
        allowNull: false,
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
    await queryInterface.dropTable('users');
  }
};