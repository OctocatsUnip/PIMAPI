'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservas_beneficios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
      },
      reserva_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'reservas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      beneficio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'beneficios', key: 'id'},
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
    return queryInterface.dropTable('reservas_beneficios');
  }
};
