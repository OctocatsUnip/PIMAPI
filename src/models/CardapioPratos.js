const { Model, DataTypes } = require('sequelize');

class Cardapio_Pratos extends Model{
    static init(sequelize){
        super.init({
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Cardapios, {foreignKey: 'cardapio_id', as: 'cardapio_owner'});
        this.belongsTo(models.Pratos, {foreignKey: 'pratos_id', as: 'pratos_owner'});
        this.belongsTo(models.ListaPedidosComida, {foreignKey: 'lista_pedidos_comida_id', as: 'lista_pedidos_comida_owner'});
    }
}

module.exports = Cardapio_Pratos;