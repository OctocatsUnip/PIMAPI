const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//models
const Bedrooms = require('../models/Bedrooms');

//realizando a conexão com o banco
const connection = new Sequelize(dbConfig);

//chamando a model e passando os dados de conexão
Bedrooms.init(connection);

module.exports = connection;