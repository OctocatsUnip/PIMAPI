const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//models
const Pessoas = require('../models/Pessoas');
const Telefones = require('../models/Telefones');
const Enderecos = require('../models/Enderecos');
const Status = require('../models/Status');
const Quartos = require('../models/Quartos');


//realizando a conexão com o banco
const connection = new Sequelize(dbConfig);

//chamando a model e passando os dados de conexão
Pessoas.init(connection);
Telefones.init(connection);
Enderecos.init(connection);
Status.init(connection);
Quartos.init(connection);


//aqui inicializamos os metodos de associação
Telefones.associate(connection.models);
Pessoas.associate(connection.models);
Enderecos.associate(connection.models);
Quartos.associate(connection.models);
Status.associate(connection.models);

//avaliar utilizar o consign ou o require-directory para importar automaticamente e inicializar as models

module.exports = connection;