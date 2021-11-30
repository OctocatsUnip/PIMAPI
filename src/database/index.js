const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//models
const Pessoa = require('../models/Pessoa');
const Endereco = require('../models/Endereco');
const Quartos = require('../models/Quartos');


//realizando a conexão com o banco
const connection = new Sequelize(dbConfig);

//chamando a model e passando os dados de conexão
Pessoa.init(connection);
Endereco.init(connection);
Quartos.init(connection);


//aqui inicializamos os metodos de associação


//avaliar utilizar o consign ou o require-directory para importar automaticamente e inicializar as models

module.exports = connection;