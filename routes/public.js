// definindo rota publica
const express = require('express')
const router = express.Router()

const path = require('path')
const usersController = require('../controllers/usersController') // Certifique-se de que o caminho do controlador está correto

router.use(express.static('public'))

router.get('/', (request, response) => {
    response.send('Servidor rodando na rota normalmente')
})

//rota para tabela cliente
router.post('/users', usersController.create)
router.get('/users', usersController.showAll) // Corrigido para 'usersController'
router.get('/users/:id', usersController.showOne) // Corrigido para 'usersController'
router.put('/users/:id', usersController.update) // Corrigido para 'usersController'
router.delete('/users/:id', usersController.delete) // Corrigido para 'usersController'


// rota para tabela produto 
router.post('/produto', usersController.create)
router.get('/produto', usersController.showAll) 
router.get('/produto/:id', usersController.showOne) 
router.put('/produto/:id', usersController.update) 
router.delete('/produto/:id', usersController.delete) 

// rota para tabela pet 
router.post('/pet', usersController.create)
router.get('/pet', usersController.showAll) 
router.get('/pet/:id', usersController.showOne) 
router.put('/pet/:id', usersController.update) 
router.delete('/pet/:id', usersController.delete) 


router.use((request, response, next) => {
    response.status(404).send('Rota não encontrada')
})

module.exports = router
