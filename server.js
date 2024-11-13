const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
app.use(express.json()); // Para analisar o corpo das requisições JSON

// Definir a configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Autenticação com JWT',
      version: '1.0.0',
      description: 'API para autenticação de usuários usando JWT',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Arquivo onde as rotas estão documentadas (ex: authRoutes.js)
};

// Criar o objeto de especificação Swagger
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Rota de documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas de autenticação
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API documentation available at http://localhost:5000/api-docs`);
});
