// scripts/testConnection.js

const { sequelize } = require('../models'); // Ajuste o caminho conforme necessário

// Testando a conexão e sincronizando modelos
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return sequelize.sync(); // Sincroniza os modelos com o banco de dados
    })
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados.');
        sequelize.close(); // Fecha a conexão após a sincronização
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });
