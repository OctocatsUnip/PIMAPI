//arquivo de criação de rotas e requisições
const express = require('express');

const PessoasController = require('./controllers/PessoasController');
const TelefonesController = require('./controllers/TelefonesController');
const EnderecosController = require('./controllers/EnderecosController');
const StatusController = require('./controllers/StatusController');
const QuartosController = require('./controllers/QuartosController');
const BeneficiosController = require('./controllers/BeneficiosController');
const FuncionariosController = require('./controllers/FuncionariosController');
const UserSistemaController = require('./controllers/UserSistemaController');
const UserClienteController =require('./controllers/UserClienteController');
const ReservasController = require('./controllers/ReservasController');

const routes = express.Router();

routes.get('/pessoas', PessoasController.index);
routes.post('/pessoas', PessoasController.store);
routes.get('/pessoas/:cpf', PessoasController.findByCpf);
routes.get('/dados_pessoas/:cpf', PessoasController.findPessoaData);

routes.post('/pessoas/telefones/:pessoa_id', TelefonesController.store);
routes.get('/pessoas/telefones/:pessoa_id', TelefonesController.index);

routes.get('/pessoas/endereco/:pessoa_id', EnderecosController.index);
routes.post('/pessoas/endereco/:pessoa_id', EnderecosController.store);

routes.get('/status', StatusController.index);
routes.get('/status/:nome_status', StatusController.findByName);
routes.post('/status', StatusController.store);

routes.get('/quartos', QuartosController.index);
routes.get('/quartos/:quantia_banheiros,:quantia_camas', QuartosController.findByBanheiro);
routes.post('/quartos', QuartosController.store);
routes.post('/quartos/:nome_quarto', QuartosController.updateStatus);


routes.get('/beneficio', BeneficiosController.index);
routes.post('/beneficio', BeneficiosController.store);

routes.get('/reservas/:quarto_id', ReservasController.index);
routes.post('/reservas', ReservasController.store);

routes.get('/funcionario/:pessoa_id', FuncionariosController.index);
routes.post('/funcionario/:pessoa_id', FuncionariosController.store);

routes.get('/user_sistema/:funcionario_id', UserSistemaController.index);
routes.post('/user_sistema/:funcionario_id', UserSistemaController.store);
routes.get('/user_sistema', UserSistemaController.getUsers);

routes.get('/user_cliente/:pessoa_id', UserClienteController.index);
routes.post('/user_cliente/:pessoa_id', UserClienteController.store);

module.exports = routes;