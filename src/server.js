//Arquivo principal de leitura da api
const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');

//importando a pasta database onde se encontram as conexões com o banco, as config e models
require('./database');

//trazendo o json com as rotas para documentação no swagger
const swaggerDocs = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(routes);

//passando rota da documentação da api no swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(5000, () => {
    console.log('Server is running with express on localhost:5000')
})