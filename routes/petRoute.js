

/**
 * @openapi
 * /pet:
 *   post:
 *     summary: "Criar um novo pet"
 *     description: "Cria um novo pet no sistema."
 *     requestBody:
 *       description: "Dados do pet para criação"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_pet:
 *                 type: string
 *                 description: "Nome do pet"
 *                 example: "Rex"
 *               sexo_pet:
 *                 type: string
 *                 description: "Sexo do pet"
 *                 enum: ["Macho", "Fêmea"]
 *                 example: "Macho"
 *               castracao:
 *                 type: string
 *                 description: "Status de castração do pet"
 *                 enum: ["Sim", "Não"]
 *                 example: "Sim"
 *               raca_pet:
 *                 type: string
 *                 description: "Raça do pet"
 *                 example: "Labrador"
 *               peso_pet:
 *                 type: number
 *                 format: float
 *                 description: "Peso do pet"
 *                 example: 25.5
 *     responses:
 *       201:
 *         description: "Pet criado com sucesso"
 *       400:
 *         description: "Erro de requisição (dados inválidos)"
 */
router.post('/pet', petController.create);


/**
 * @openapi
 * /pet:
 *   get:
 *     summary: "Listar todos os pets"
 *     description: "Retorna uma lista com todos os pets cadastrados."
 *     responses:
 *       200:
 *         description: "Lista de pets"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_pet:
 *                     type: integer
 *                     description: "ID do pet"
 *                     example: 1
 *                   nome_pet:
 *                     type: string
 *                     description: "Nome do pet"
 *                     example: "Rex"
 *                   sexo_pet:
 *                     type: string
 *                     description: "Sexo do pet"
 *                     example: "Macho"
 *                   castracao:
 *                     type: string
 *                     description: "Status de castração do pet"
 *                     example: "Sim"
 *                   raca_pet:
 *                     type: string
 *                     description: "Raça do pet"
 *                     example: "Labrador"
 *                   peso_pet:
 *                     type: number
 *                     format: float
 *                     description: "Peso do pet"
 *                     example: 25.5
 */
router.get('/pet', petController.showAll);


/**
 * @openapi
 * /pet/{id}:
 *   get:
 *     summary: "Obter detalhes de um pet"
 *     description: "Retorna as informações detalhadas de um pet específico pelo ID."
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do pet"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Pet encontrado com sucesso"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_pet:
 *                   type: integer
 *                   description: "ID do pet"
 *                   example: 1
 *                 nome_pet:
 *                   type: string
 *                   description: "Nome do pet"
 *                   example: "Rex"
 *                 sexo_pet:
 *                   type: string
 *                   description: "Sexo do pet"
 *                   example: "Macho"
 *                 castracao:
 *                   type: string
 *                   description: "Status de castração do pet"
 *                   example: "Sim"
 *                 raca_pet:
 *                   type: string
 *                   description: "Raça do pet"
 *                   example: "Labrador"
 *                 peso_pet:
 *                   type: number
 *                   format: float
 *                   description: "Peso do pet"
 *                   example: 25.5
 *       404:
 *         description: "Pet não encontrado"
 */
router.get('/pet/:id', petController.showOne);


/**
 * @openapi
 * /pet/{id}:
 *   put:
 *     summary: "Atualizar informações de um pet"
 *     description: "Atualiza os dados de um pet existente."
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do pet"
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: "Dados atualizados do pet"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_pet:
 *                 type: string
 *                 description: "Nome do pet"
 *                 example: "Rex"
 *               sexo_pet:
 *                 type: string
 *                 description: "Sexo do pet"
 *                 enum: ["Macho", "Fêmea"]
 *                 example: "Macho"
 *               castracao:
 *                 type: string
 *                 description: "Status de castração do pet"
 *                 enum: ["Sim", "Não"]
 *                 example: "Sim"
 *               raca_pet:
 *                 type: string
 *                 description: "Raça do pet"
 *                 example: "Labrador"
 *               peso_pet:
 *                 type: number
 *                 format: float
 *                 description: "Peso do pet"
 *                 example: 25.5
 *     responses:
 *       200:
 *         description: "Pet atualizado com sucesso"
 *       404:
 *         description: "Pet não encontrado"
 */
router.put('/pet/:id', petController.update);


/**
 * @openapi
 * /pet/{id}:
 *   delete:
 *     summary: "Deletar um pet"
 *     description: "Deleta um pet específico pelo ID."
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do pet"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Pet deletado com sucesso"
 *       404:
 *         description: "Pet não encontrado"
 */
router.delete('/pet/:id', petController.delete);


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
