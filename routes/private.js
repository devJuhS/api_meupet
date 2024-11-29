const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas protegidas para usuários
router.get('/users/:id', authMiddleware, usersController.showOne);
router.put('/users/:id', authMiddleware, usersController.update);
router.delete('/users/:id', authMiddleware, usersController.delete);

module.exports = router;