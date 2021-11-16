const { Model, DataTypes } = require('sequelize');

class RequisicaoPedidos extends Model{
    static init(sequelize){
        super.init({
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Fichas, {foreignKey: 'ficha_id', as: 'ficha_owner'});
        this.belongsTo(models.ListaPedidosComida, {foreignKey: 'lista_pedidos_comida_id', as: 'lista_pedidos_comida_owner'});
        this.belongsTo(models.ListaPedidosServicos, {foreignKey: 'lista_pedidos_servicos_id', as: 'lista_pedidos_servicos_owner'});
    }
}

module.exports = RequisicaoPedidos;