'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('telefones', {
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
      celular: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fixo: {
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

    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('telefones');
  }
};
