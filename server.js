const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes/public'); // Assumindo um arquivo de rotas principais

require('dotenv').config();
const app = express();

// Configuração do Sequelize
const sequelize = new Sequelize('meupet', 'root', 'Senha123@', {
    host: 'localhost',
    dialect: 'mysql',
});

// Teste de conexão com o banco
sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados bem-sucedida.'))
    .catch(err => console.error('Erro ao conectar ao banco:', err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

//teste//