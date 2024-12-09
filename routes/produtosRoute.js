/**
 * @openapi
 * /produtos:
 *   post:
 *     summary: "Criar um novo produto"
 *     description: "Cria um novo produto no sistema, como alimentos, brinquedos ou acessórios para pets."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_produto:
 *                 type: string
 *                 description: "Nome do produto"
 *                 example: "Ração Premium para Cachorro"
 *               descricao_produto:
 *                 type: string
 *                 description: "Descrição detalhada do produto"
 *                 example: "Ração balanceada com proteínas de alta qualidade para cachorros adultos."
 *               preco_produto:
 *                 type: number
 *                 format: float
 *                 description: "Preço do produto"
 *                 example: 129.99
 *               quantidade_estoque:
 *                 type: integer
 *                 description: "Quantidade disponível em estoque"
 *                 example: 150
 *               categoria_produto:
 *                 type: string
 *                 description: "Categoria do produto"
 *                 example: "Alimentos"
 *     responses:
 *       201:
 *         description: "Produto criado com sucesso"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_produto:
 *                   type: integer
 *                   description: "ID do produto criado"
 *                   example: 1
 *                 nome_produto:
 *                   type: string
 *                   description: "Nome do produto"
 *                   example: "Ração Premium para Cachorro"
 *                 descricao_produto:
 *                   type: string
 *                   description: "Descrição do produto"
 *                   example: "Ração balanceada com proteínas de alta qualidade para cachorros adultos."
 *                 preco_produto:
 *                   type: number
 *                   format: float
 *                   description: "Preço do produto"
 *                   example: 129.99
 *                 quantidade_estoque:
 *                   type: integer
 *                   description: "Quantidade disponível em estoque"
 *                   example: 150
 *                 categoria_produto:
 *                   type: string
 *                   description: "Categoria do produto"
 *                   example: "Alimentos"
 *                 data_adicionado:
 *                   type: string
 *                   format: date-time
 *                   description: "Data de adição do produto"
 *                   example: "2024-12-08T12:30:00Z"
 *       400:
 *         description: "Dados inválidos fornecidos"
 *       500:
 *         description: "Erro interno do servidor"
 */
router.post('/produtos', produtosController.create);


/**
 * @openapi
 * /produtos:
 *   get:
 *     summary: "Listar todos os produtos"
 *     description: "Retorna uma lista de todos os produtos cadastrados no sistema, como alimentos, brinquedos e acessórios para pets."
 *     responses:
 *       200:
 *         description: "Lista de produtos"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_produto:
 *                     type: integer
 *                     description: "ID do produto"
 *                     example: 1
 *                   nome_produto:
 *                     type: string
 *                     description: "Nome do produto"
 *                     example: "Brinquedo para Gatos"
 *                   descricao_produto:
 *                     type: string
 *                     description: "Descrição do produto"
 *                     example: "Brinquedo interativo para gatos com catnip."
 *                   preco_produto:
 *                     type: number
 *                     format: float
 *                     description: "Preço do produto"
 *                     example: 39.99
 *                   quantidade_estoque:
 *                     type: integer
 *                     description: "Quantidade disponível em estoque"
 *                     example: 200
 *                   categoria_produto:
 *                     type: string
 *                     description: "Categoria do produto"
 *                     example: "Brinquedos"
 *                   data_adicionado:
 *                     type: string
 *                     format: date-time
 *                     description: "Data de adição do produto"
 *                     example: "2024-12-08T12:30:00Z"
 *       500:
 *         description: "Erro ao recuperar a lista de produtos"
 */
router.get('/produtos', produtosController.showAll);



/**
 * @openapi
 * /produtos/{id}:
 *   get:
 *     summary: "Obter produto por ID"
 *     description: "Retorna os detalhes de um produto específico, incluindo nome, descrição, preço e estoque."
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do produto"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Produto encontrado"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_produto:
 *                   type: integer
 *                   description: "ID do produto"
 *                   example: 1
 *                 nome_produto:
 *                   type: string
 *                   description: "Nome do produto"
 *                   example: "Coleira para Cães"
 *                 descricao_produto:
 *                   type: string
 *                   description: "Descrição do produto"
 *                   example: "Coleira ajustável de nylon para cães grandes."
 *                 preco_produto:
 *                   type: number
 *                   format: float
 *                   description: "Preço do produto"
 *                   example: 49.99
 *                 quantidade_estoque:
 *                   type: integer
 *                   description: "Quantidade disponível em estoque"
 *                   example: 50
 *                 categoria_produto:
 *                   type: string
 *                   description: "Categoria do produto"
 *                   example: "Acessórios"
 *                 data_adicionado:
 *                   type: string
 *                   format: date-time
 *                   description: "Data de adição do produto"
 *                   example: "2024-12-08T12:30:00Z"
 *       404:
 *         description: "Produto não encontrado"
 *       500:
 *         description: "Erro ao recuperar o produto"
 */
router.get('/produtos/:id', produtosController.showOne);




/**
 * @openapi
 * /produtos/{id}:
 *   put:
 *     summary: "Atualizar um produto"
 *     description: "Atualiza as informações de um produto específico, como nome, preço, quantidade em estoque, etc."
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do produto"
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
 *               nome_produto:
 *                 type: string
 *                 description: "Nome do produto"
 *                 example: "Ração para Gatos"
 *               descricao_produto:
 *                 type: string
 *                 description: "Descrição detalhada do produto"
 *                 example: "Ração completa para gatos adultos com sabor de frango."
 *               preco_produto:
 *                 type: number
 *                 format: float
 *                 description: "Preço do produto"
 *                 example: 89.99
 *               quantidade_estoque:
 *                 type: integer
 *                 description: "Quantidade disponível em estoque"
 *                 example: 300
 *               categoria_produto:
 *                 type: string
 *                 description: "Categoria do produto"
 *                 example: "Alimentos"
 *     responses:
 *       200:
 *         description: "Produto atualizado com sucesso"
 *       400:
 *         description: "Dados inválidos fornecidos"
 *       404:
 *         description: "Produto não encontrado"
 *       500:
 *         description: "Erro interno do servidor"
 */
router.put('/produtos/:id', produtosController.update);



/**
 * @openapi
 * /produtos/{id}:
 *   delete:
 *     summary: "Deletar um produto"
 *     description: "Deleta um produto específico pelo ID."
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID do produto"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Produto deletado com sucesso"
 *       404:
 *         description: "Produto não encontrado"
 *       500:
 *         description: "Erro ao deletar o produto"
 */
router.delete('/produtos/:id', produtosController.delete);