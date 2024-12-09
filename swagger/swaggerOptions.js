const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Definir opções de configuração do Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Meu Pet',
            version: '5.0.0',
            description: 'Documentação da API utilizando Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000', // URL da sua API
                description: 'API local',
            },
        ],
    },
    // Caminhos dos arquivos de documentação
    apis: ['./routes/*.js'], // Arquivos com os comentários Swagger (no caso, arquivos dentro da pasta `routes`)
};

// Gerar a documentação Swagger
const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };