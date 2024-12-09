// swaggerOptions.js
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Definir a versão da OpenAPI
    info: {
      title: 'Meu Pet', // Nome da sua API
      version: '1.5.0', // Versão da sua API
      description: 'Documentação da API com Swagger', // Descrição da sua API
    },
  },
  // Caminho para os arquivos de código que terão os comentários para o Swagger
  apis: ['./routes/public.js'], // Certifique-se de ajustar esse caminho para o local correto do seu código
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerDocs;
