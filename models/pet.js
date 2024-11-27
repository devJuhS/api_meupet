'use strict';

const {Model, DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
    class Pet extends Model {
        static associate (models) {
            this.belongsTo(models.Users, { foreignKey: 'petid_user' });
        }
    }

    Pet.init(
        {
            id_pet: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            nome_pet: {type: DataTypes.STRING(120), allowNull: false},
            sexo_pet: {
                type: DataTypes.ENUM('Macho', 'Fêmea'),
                allowNull: false
            },
            castracao: {
                type: DataTypes.ENUM('Sim', 'Não'),
                allowNull: false
            },
            raca_pet: {type: DataTypes.STRING(120), allowNull: false},
            peso_pet: {type: DataTypes.FLOAT, allowNull: false},
        },
        {
            sequelize,
            modelName: 'Pet',
            tableName: 'pet',
        }
    )

    return Pet;
};