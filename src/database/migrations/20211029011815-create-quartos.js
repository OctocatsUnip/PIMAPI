'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('quartos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_quarto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor_quarto: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      quantia_camas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantia_banheiros: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      img_quarto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descricao_quarto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
     },
     updated_at: {
       type: Sequelize.DATE,
        allowNull: false
     }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('quartos');
  }
};
