'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cardapio_pratos', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
       },
       cardapio_id:{
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {model: 'cardapios', key: 'id'}, //criacao da chave estrangeira
         onUpdate: 'CASCADE', //sempre que houver alguma alteração na tabela/campo que está se relacionando ocorrerá um efeito cascata e esse campo será atualizado
         onDelete: 'CASCADE', //poderiamos restringir (restrict) esse campo para que a tabela pessoa não possa ser deletada quando a endereco tiver algum registro. No caso do cascade, caso uma pessoa seja deletada, seu endereço também será
       },
       pratos_id:{
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {model: 'pratos', key: 'id'}, //criacao da chave estrangeira
         onUpdate: 'CASCADE', //sempre que houver alguma alteração na tabela/campo que está se relacionando ocorrerá um efeito cascata e esse campo será atualizado
         onDelete: 'CASCADE', //poderiamos restringir (restrict) esse campo para que a tabela pessoa não possa ser deletada quando a endereco tiver algum registro. No caso do cascade, caso uma pessoa seja deletada, seu endereço também será
       },
       lista_pedidos_comida_id:{
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {model: 'lista_pedidos_comida', key: 'id'}, //criacao da chave estrangeira
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

       });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cardapio_pratos');
  }
};
