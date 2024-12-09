
// Rotas para Users
/**
 * @openapi
 * /users:
 *   post:
 *     summary: "Criar um novo usuário"
 *     description: "Cria um novo usuário no sistema com as informações fornecidas."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_user:
 *                 type: string
 *                 description: "Nome completo do usuário"
 *                 example: "João Silva"
 *               cpf_user:
 *                 type: string
 *                 description: "CPF do usuário, formato: 000.000.000-00"
 *                 example: "123.456.789-00"
 *               cel_user:
 *                 type: string
 *                 description: "Número de celular do usuário, formato: (11) 91234-5678"
 *                 example: "(11) 91234-5678"
 *               tel_user:
 *                 type: string
 *                 description: "Número de telefone fixo do usuário, formato: (11) 2345-6789"
 *                 example: "(11) 2345-6789"
 *               email_user:
 *                 type: string
 *                 description: "Email do usuário"
 *                 example: "joao.silva@exemplo.com"
 *               genero_user:
 *                 type: string
 *                 description: "Gênero do usuário. Pode ser 'Masculino', 'Feminino' ou 'Outro'."
 *                 example: "Masculino"
 *               dt_nasc_user:
 *                 type: string
 *                 format: date
 *                 description: "Data de nascimento do usuário no formato YYYY-MM-DD"
 *                 example: "1990-05-15"
 *               senha_user:
 *                 type: string
 *                 description: "Senha do usuário"
 *                 example: "senha@1234"
 *     responses:
 *       201:
 *         description: "Usuário criado com sucesso"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_user:
 *                   type: integer
 *                   description: "ID do usuário criado"
 *                   example: 1
 *                 nome_user:
 *                   type: string
 *                   description: "Nome do usuário"
 *                   example: "João Silva"
 *                 email_user:
 *                   type: string
 *                   description: "Email do usuário"
 *                   example: "joao.silva@gmail.com"
 *       400:
 *         description: "Dados inválidos fornecidos"
 *       500:
 *         description: "Erro interno do servidor"
 */
router.post('/users', usersController.create);




/**
 * @openapi
 * /users:
 *   get:
 *     summary: "Listar todos os usuários"
 *     description: "Retorna uma lista de todos os usuários cadastrados no sistema."
 *     responses:
 *       200:
 *         description: "Lista de usuários"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_user:
 *                     type: integer
 *                     description: "ID do usuário"
 *                     example: 1
 *                   nome_user:
 *                     type: string
 *                     description: "Nome completo do usuário"
 *                     example: "João Silva"
 *                   email_user:
 *                     type: string
 *                     description: "Email do usuário"
 *                     example: "joao.silva@example.com"
 *                   cpf_user:
 *                     type: string
 *                     description: "CPF do usuário"
 *                     example: "123.456.789-00"
 *                   cel_user:
 *                     type: string
 *                     description: "Número de celular do usuário"
 *                     example: "(11) 91234-5678"
 *                   dt_nasc_user:
 *                     type: string
 *                     format: date
 *                     description: "Data de nascimento do usuário"
 *                     example: "1990-05-15"
 *       500:
 *         description: "Erro ao recuperar a lista de usuários"
 */
router.get('/users', usersController.showAll);




/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: "Obter usuário por ID"
 *     description: "Retorna os detalhes de um usuário específico pelo ID."
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
 *                 id_user:
 *                   type: integer
 *                   description: "ID do usuário"
 *                   example: 1
 *                 nome_user:
 *                   type: string
 *                   description: "Nome completo do usuário"
 *                   example: "João Silva"
 *                 email_user:
 *                   type: string
 *                   description: "Email do usuário"
 *                   example: "joao.silva@example.com"
 *                 cpf_user:
 *                   type: string
 *                   description: "CPF do usuário"
 *                   example: "123.456.789-00"
 *                 cel_user:
 *                   type: string
 *                   description: "Número de celular do usuário"
 *                   example: "(11) 91234-5678"
 *       404:
 *         description: "Usuário não encontrado"
 *       500:
 *         description: "Erro ao recuperar o usuário"
 */
router.get('/users/:id', usersController.showOne);


/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: "Atualizar um usuário"
 *     description: "Atualiza as informações de um usuário específico, como nome, email, telefone, etc."
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
 *               nome_user:
 *                 type: string
 *                 description: "Nome completo do usuário"
 *                 example: "João Silva"
 *               email_user:
 *                 type: string
 *                 description: "Email do usuário"
 *                 example: "joao.silva@example.com"
 *               cel_user:
 *                 type: string
 *                 description: "Número de celular do usuário"
 *                 example: "(11) 91234-5678"
 *               tel_user:
 *                 type: string
 *                 description: "Número de telefone fixo do usuário"
 *                 example: "(11) 2345-6789"
 *               genero_user:
 *                 type: string
 *                 description: "Gênero do usuário"
 *                 example: "Masculino"
 *               dt_nasc_user:
 *                 type: string
 *                 format: date
 *                 description: "Data de nascimento do usuário"
 *                 example: "1990-05-15"
 *     responses:
 *       200:
 *         description: "Usuário atualizado com sucesso"
 *       400:
 *         description: "Dados inválidos fornecidos"
 *       404:
 *         description: "Usuário não encontrado"
 *       500:
 *         description: "Erro interno do servidor"
 */
router.put('/users/:id', usersController.update);


/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: "Deletar um usuário"
 *     description: "Deleta um usuário específico pelo ID."
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
 *       404:
 *         description: "Usuário não encontrado"
 *       500:
 *         description: "Erro ao deletar o usuário"
 */
router.delete('/users/:id', usersController.delete);