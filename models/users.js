'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Users extends Model {
        static associate(models) {
            this.hasMany(models.Pet, { foreignKey: 'petid_user' });
        }
    }

    Users.init(
      {
        id_user: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        nome_user: { type: DataTypes.STRING(120), allowNull: false },
        cpf_user: { type: DataTypes.STRING(12), allowNull: false, unique: true },
        cel_user: { type: DataTypes.STRING(11), allowNull: false, unique: true },
        tel_user: { type: DataTypes.STRING(11) },
        email_user: { type: DataTypes.STRING(120), allowNull: false, unique: true },
        genero_user: { 
            type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'), 
            allowNull: false 
        },
        dt_nasc_user: { type: DataTypes.DATEONLY, allowNull: false }
      },
      {
        sequelize,
        modelName: 'Users',
        tableName: 'users',
      }
    )

    return Users;
};

//teste//