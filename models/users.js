'use strict';

const { Model, DataTypes } = require('sequelize'); // Importa Model e DataTypes do Sequelize

module.exports = (sequelize, DataTypes) => {
    class Users extends Model { // Corrigido para Model com "M" maiúsculo
        /**
         * Método auxiliar para definir associações.
         * Este método não faz parte do ciclo de vida do Sequelize.
         * O arquivo `models/index` chamará este método automaticamente.
         */
        static associate(models) {
            // Defina as associações aqui
        }
    }

    // Inicialize o modelo com os atributos
    Users.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        sequelize, // Passa a instância de sequelize
        modelName: 'users', // Nome do modelo (ajustado para a convenção de nomeação)
      }
    );

    return Users;
};
