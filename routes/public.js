const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const produtosController = require('../controllers/produtosController');
const petController = require('../controllers/petController');

// Rota para boas-vindas
router.get ('/', (req, res) => {
    res.send('Bem-vindo!')
})



// Rota de login
router.get('/login', usersController.login);
/**
 * @openapi
 * /login:
 *   get:
 *     summary: "Rota de login"
 *     description: "Rota para realizar o login do usuário."
 *     responses:
 *       200:
 *         description: "Login realizado com sucesso"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: "Token de autenticação"
 *       401:
 *         description: "Credenciais inválidas"
 */


// Rotas de usuários
router.use('/users', usersRoute);

// Rotas de produtos
router.use('/produtos', produtosRoute);

// Rotas de pets
router.use('/pet', petRoute);


  // Rota para exibir a documentação da API
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  

// Middleware para rotas não encontradas
/**
 * @openapi
 * /{any}:
 *   all:
 *     summary: "Rota não encontrada"
 *     description: "Middleware para todas as rotas não definidas."
 *     responses:
 *       404:
 *         description: "Rota não encontrada"
 */
router.use((req, res) => {
    res.status(404).send('Rota não encontrada');
});

module.exports = router;