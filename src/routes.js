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
const BeneficiosController = require('./controllers/BeneficiosController');
const UsuarioSistemaController = require('./controllers/UsuarioSistemaController');

const routes = express.Router();

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.store);
routes.get('/pessoa/:cpf', PessoaController.findByCpf);

routes.get('/pessoa/endereco/:pessoa_id', EnderecoController.index);
routes.post('/pessoa/endereco/:pessoa_id', EnderecoController.store);

routes.get('/pessoa/telefones/:pessoa_id', TelefonesController.index);
routes.post('/pessoa/telefones/:pessoa_id', TelefonesController.store);

routes.get('/quarto', QuartosController.index);
routes.post('/quarto', QuartosController.store);
routes.post('/quarto/:quantia_banheiros', QuartosController.findByBanheiro);

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

routes.get('/beneficios', BeneficiosController.index);
routes.post('/beneficios', BeneficiosController.store);

routes.get('/cargos/:cargo_id/usuario_sistema', UsuarioSistemaController.index);
routes.post('/cargos/:cargo_id/usuario_sistema', UsuarioSistemaController.store);

module.exports = routes;