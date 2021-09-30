'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('bedrooms', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        valor: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        imagePath: {
          type: Sequelize.STRING(1234)
        },
        numBed: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        numBathroom: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        //precisamos sempre inserir nas tab para que ele possa registrar o momento da criação e alteração
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bedrooms');
  }
};
