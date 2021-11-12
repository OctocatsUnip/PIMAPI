//arquivo de criação de rotas e requisições
const express = require('express');

const PessoaController = require('./controllers/PessoaController');
const EnderecoController = require('./controllers/EnderecoController');
const TelefonesController = require('./controllers/TelefonesController');
const QuartosController = require('./controllers/QuartosController');
const CardapiosController = require('./controllers/CardapiosController');
const PratosController = require('./controllers/PratosController');
const ListaPedidosComidaController = require('./controllers/ListaPedidosComidaController');
const ListaPedidosServicosController = require('./controllers/ListaPedidosServicosController');
const CargosController = require('./controllers/CargosController');

const routes = express.Router();

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.store);

routes.get('/pessoa/:pessoa_id/endereco', EnderecoController.index);
routes.post('/pessoa/:pessoa_id/endereco', EnderecoController.store);

routes.get('/pessoa/:pessoa_id/telefones', TelefonesController.index);
routes.post('/pessoa/:pessoa_id/telefones', TelefonesController.store);

routes.get('/quarto', QuartosController.index);
routes.post('/quarto', QuartosController.store);

routes.get('/cardapio', CardapiosController.index);
routes.post('/cardapio', CardapiosController.store);

routes.get('/prato', PratosController.index);
routes.post('/prato', PratosController.store);

routes.get('/lista_pedidos_comida', ListaPedidosComidaController.index);
routes.post('/lista_pedidos_comida', ListaPedidosComidaController.store);

routes.get('/lista_pedidos_servicos', ListaPedidosServicosController.index);
routes.post('/lista_pedidos_servicos', ListaPedidosServicosController.store);

routes.get('/cargos', CargosController.index);
routes.post('/cargos', CargosController.store);

module.exports = routes;