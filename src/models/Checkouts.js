const { Model, DataTypes } = require('sequelize');

class Checkouts extends Model{
    static init(sequelize){
        super.init({
            valor_total: DataTypes.FLOAT,
            status_pago: DataTypes.BOOLEAN,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.hasMany(models.Fichas, {foreignKey: 'ficha_id', as: 'ficha_owner'});
    }
}

module.exports = Checkouts;