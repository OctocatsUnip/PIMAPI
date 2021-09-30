//arquivo de criação de rotas e requisições
const express = require('express');
const Bedrooms = require('./controllers/BedroomsController');

const routes = express.Router();

routes.get('/quartos', Bedrooms.index);
routes.post('/quartos', Bedrooms.store);

module.exports = routes;