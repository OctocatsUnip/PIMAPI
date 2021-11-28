'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('hospedes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pessoa', key: 'id' }, //criacao da chave estrangeira
        onUpdate: 'CASCADE', //sempre que houver alguma alteração na tabela/campo que está se relacionando ocorrerá um efeito cascata e esse campo será atualizado
        onDelete: 'CASCADE', //poderiamos restringir (restrict) esse campo para que a tabela pessoa não possa ser deletada quando a endereco tiver algum registro. No caso do cascade, caso uma pessoa seja deletada, seu endereço também será
      },
      ficha_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'fichas', key: 'id' }, //criacao da chave estrangeira
        onUpdate: 'CASCADE', //sempre que houver alguma alteração na tabela/campo que está se relacionando ocorrerá um efeito cascata e esse campo será atualizado
        onDelete: 'CASCADE', //poderiamos restringir (restrict) esse campo para que a tabela pessoa não possa ser deletada quando a endereco tiver algum registro. No caso do cascade, caso uma pessoa seja deletada, seu endereço também será
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
    return queryInterface.dropTable('hospedes');
  }
};