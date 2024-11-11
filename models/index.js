'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); 
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize; // Declara apenas uma vez para evitar a duplicação

// Configura a instância de Sequelize com base no ambiente
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);   
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Carrega todos os modelos na pasta atual
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associações entre os modelos, se houver
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exporta a instância do Sequelize e os modelos
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
