const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const produtoController = require('../controllers/produtoController');
const petController = require('../controllers/petController');

// Rotas para Users
router.post('/users', usersController.create);
router.get('/users', usersController.showAll);
router.get('/users/:id', usersController.showOne);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

// Rotas para Produto
router.post('/produto', produtoController.create);
router.get('/produto', produtoController.showAll);
router.get('/produto/:id', produtoController.showOne);
router.put('/produto/:id', produtoController.update);
router.delete('/produto/:id', produtoController.delete);

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
