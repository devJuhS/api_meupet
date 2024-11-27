const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const produtosController = require('../controllers/produtosController');
const petController = require('../controllers/petController');

// Rota para boas-vindas
router.get ('/', (req, res) => {
    res.send('Bem-vindo!')
})

// Rotas para Users
router.post('/users', usersController.create);
router.get('/users', usersController.showAll);
router.get('/users/:id', usersController.showOne);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

// Rotas para Produto
router.post('/produtos', produtosController.create);
router.get('/produtos', produtosController.showAll);
router.get('/produtos/:id', produtosController.showOne);
router.put('/produtos/:id', produtosController.update);
router.delete('/produtos/:id', produtosController.delete);

// Rotas para Pet
router.post('/pet', petController.create);
router.get('/pet', petController.showAll);
router.get('/pet/:id', petController.showOne);
router.put('/pet/:id', petController.update);
router.delete('/pet/:id', petController.delete);

// Middleware para rotas não encontradas
router.use((req, res) => {
    res.status(404).send('Rota não encontrada');
});

module.exports = router;