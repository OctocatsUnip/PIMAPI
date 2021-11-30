'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_final: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_checkout: {
        type: Sequelize.DATE,
        allowNull: false
      },
      valor_diarias: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      valor_beneficios: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      quarto_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'quartos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservas');
  }
};
