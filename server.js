const express = require('express');
const cors =  require('cors')
const routes = require('./routes/public'); 

require('dotenv').config();
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', routes);
app.use('/produto', routes); // Rota para produtos
app.use('/pets', routes); // Rota para pets

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

