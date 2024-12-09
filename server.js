/*const express = require('express');
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
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));*/

const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const publicRoutes = require('./routes/public');
const privateRoutes = require('./routes/private');
const authMiddleware = require('./middlewares/authMiddleware'); // Middleware de autenticação
const swaggerUi = require('swagger-ui-express');
const swaggerJsDocs = require('./swaggerOptions'); // Importar as configurações do Swagger
const userValidator = require('./joi'); // Importando o validador Joi



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


// Função para validar os dados da requisição com Joi
function validarDados(req, res, next) {
    const { error } = userValidator.validate(req.body); // Usando o userValidator importado
    if (error) {
      return res.status(400).json({ erro: error.details[0].message });
    }
    next(); // Se a validação passar, continua para a próxima função
  }
  
  // Rotas públicas (validação de dados para criar um usuário, por exemplo)
  app.post('/usuario', validarDados, (req, res) => {
    const { nome_user, email_user, senha_user } = req.body;
    // Aqui você pode processar os dados, como salvar no banco de dados
    res.status(201).json({ mensagem: `Usuário ${nome_user} criado com sucesso!` });
  });



// Rotas públicas
app.use('/', publicRoutes);

// Rotas privadas (com autenticação)
app.use('/private', authMiddleware, privateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
console,log('Documentação Swagger disponível em http://localhost:${PORT}/api-docs`');
});
