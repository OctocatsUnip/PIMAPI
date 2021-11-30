'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Reservas', 'data_inicio', {
      type: Sequelize.DATEONLY,
      allowNull: false
    });
    queryInterface.changeColumn('Reservas', 'data_final', {
      type: Sequelize.DATEONLY,
      allowNull: false
    });
    queryInterface.changeColumn('Reservas', 'data_checkout', {
      type: Sequelize.DATEONLY,
      allowNull: false
    });    
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Reservas', 'data_inicio', {
      type: Sequelize.DATE,
      allowNull: false
    });
    queryInterface.changeColumn('Reservas', 'data_final', {
      type: Sequelize.DATE,
      allowNull: false
    });
    queryInterface.changeColumn('Reservas', 'data_checkout', {
      type: Sequelize.DATE,
      allowNull: false
    });
  }
};
