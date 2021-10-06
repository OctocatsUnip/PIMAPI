'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('pessoa', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
       },
       nome_pessoa: {
         type: Sequelize.STRING,
         allowNull: false
       },
       rg: {
         type: Sequelize.STRING,
         allowNull: false,         
       },
       cpf: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       dt_nascimento: {
         type: Sequelize.DATE,
         allowNull: false
       },
       sexo: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       email: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       created_at: {
          type: Sequelize.DATE,
          allowNull: false
       },
       updated_at: {
         type: Sequelize.DATE,
          allowNull: false
       }

       });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoa');
  }
};
