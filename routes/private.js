const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas protegidas para usuários
/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: "Obter informações de um usuário por ID"
 *     description: "Retorna os detalhes de um usuário específico. Acesso protegido por autenticação."
 *     security:
 *       - bearerAuth: []  # Define que a rota requer autenticação via token (Bearer Token)
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do usuário"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Usuário encontrado"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         description: "Token de autenticação inválido"
 *       404:
 *         description: "Usuário não encontrado"
 */
router.get('/users/:id', authMiddleware, usersController.showOne);



/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: "Atualizar informações de um usuário por ID"
 *     description: "Atualiza as informações de um usuário específico. Acesso protegido por autenticação."
 *     security:
 *       - bearerAuth: []  # Define que a rota requer autenticação via token (Bearer Token)
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do usuário"
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "Nome do usuário"
 *               email:
 *                 type: string
 *                 description: "Email do usuário"
 *     responses:
 *       200:
 *         description: "Usuário atualizado com sucesso"
 *       400:
 *         description: "Dados inválidos ou incompletos"
 *       401:
 *         description: "Token de autenticação inválido"
 *       404:
 *         description: "Usuário não encontrado"
 */
router.put('/users/:id', authMiddleware, usersController.update);




/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: "Deletar um usuário por ID"
 *     description: "Deleta um usuário específico do sistema. Acesso protegido por autenticação."
 *     security:
 *       - bearerAuth: []  # Define que a rota requer autenticação via token (Bearer Token)
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do usuário"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Usuário deletado com sucesso"
 *       401:
 *         description: "Token de autenticação inválido"
 *       404:
 *         description: "Usuário não encontrado"
 */

module.exports = router;