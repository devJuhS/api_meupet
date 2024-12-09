/**
 * @openapi
 * /error-handler:
 *   description: "Middleware para tratamento de erros"
 *   responses:
 *     500:
 *       description: "Erro interno do servidor"
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 description: "Indica se a operação foi bem-sucedida"
 *                 example: false
 *               message:
 *                 type: string
 *                 description: "Mensagem do erro"
 *                 example: "Ocorreu um erro inesperado."
 *               details:
 *                 type: string
 *                 description: "Detalhes do erro (disponível apenas em ambientes de desenvolvimento)"
 *                 example: "Error: Cannot read property 'name' of undefined at ..."
 *                 nullable: true
 *       400:
 *         description: "Erro de requisição (dados inválidos)"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: "Indica se a operação foi bem-sucedida"
 *                   example: false
 *                 message:
 *                   type: string
 *                   description: "Mensagem do erro"
 *                   example: "Dados inválidos fornecidos."
 *                 details:
 *                   type: string
 *                   description: "Detalhes do erro (disponível apenas em ambientes de desenvolvimento)"
 *                   example: "Error: Validation failed for field 'name'."
 *                   nullable: true
 *     404:
 *       description: "Recurso não encontrado"
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 description: "Indica se a operação foi bem-sucedida"
 *                 example: false
 *               message:
 *                 type: string
 *                 description: "Mensagem do erro"
 *                 example: "Recurso não encontrado."
 *               details:
 *                 type: string
 *                 description: "Detalhes do erro (disponível apenas em ambientes de desenvolvimento)"
 *                 example: "Error: Resource with ID '123' not found."
 *                 nullable: true
 */

/**
 * Middleware para tratamento de erros.
 * Esse middleware captura erros no sistema, loga o erro completo no servidor (para fins de depuração)
 * e envia uma resposta padronizada para o cliente com o código de status e a mensagem do erro.
 * 
 * - Se a aplicação estiver em desenvolvimento, a pilha de erros completa é retornada.
 * - Se a aplicação estiver em produção, apenas uma mensagem genérica de erro será exibida.
 * 
 * @param {Error} err - O erro que foi gerado
 * @param {Request} req - A requisição HTTP recebida
 * @param {Response} res - A resposta HTTP a ser enviada ao cliente
 * @param {Function} next - Função para passar o controle para o próximo middleware (não utilizada aqui)
 * 
 * @returns {void} Retorna a resposta de erro padronizada em formato JSON
 */




module.exports = (err, req, res, next) => {
    console.error(err.stack); // Loga o erro completo no servidor (para depuração)

    // Determina o código de status do erro
    const statusCode = err.statusCode || 500; // Por padrão, 500 é o código para erro interno do servidor
    const message = err.message || 'Ocorreu um erro inesperado.';

    // Resposta JSON padronizada para o cliente
    res.status(statusCode).json({
        success: false,
        message
    });
};
