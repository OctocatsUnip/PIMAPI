const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//models
const Pessoa = require('../models/Pessoa');
const Endereco = require('../models/Endereco');
const Quartos = require('../models/Quartos');
const Cardapios = require('../models/Cardapios');
const Pratos = require('../models/Pratos');
const CardapioPratos = require('../models/CardapioPratos');
const ListaPedidosComida = require('../models/ListaPedidosComida');
const ListaPedidosServicos = require('../models/ListaPedidosServicos');
const Cargos = require('../models/Cargos');
const Telefones = require('../models/Telefones');

//realizando a conexão com o banco
const connection = new Sequelize(dbConfig);

//chamando a model e passando os dados de conexão
Pessoa.init(connection);
Endereco.init(connection);
Quartos.init(connection);
Cardapios.init(connection);
Pratos.init(connection);
CardapioPratos.init(connection);
ListaPedidosComida.init(connection);
ListaPedidosServicos.init(connection);
Cargos.init(connection);
Telefones.init(connection);

//aqui inicializamos os metodos
Pessoa.associate(connection.models);
Endereco.associate(connection.models); //aqui podemos passar cada model separadamente ou passar assim para chamar tudo de uma vez
CardapioPratos.associate(connection.models);
Telefones.associate(connection.models);

//avaliar utilizar o consign ou o require-directory para importar automaticamente e inicializar as models

module.exports = connection;