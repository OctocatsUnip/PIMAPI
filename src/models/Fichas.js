const { Model, DataTypes } = require('sequelize');

class Fichas extends Model{
    static init(sequelize){
        super.init({
            checkin: DataTypes.DATE,
            checkout: DataTypes.DATE,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Quartos, {foreignKey: 'quarto_id', as: 'quarto_owner'});
        this.belongsTo(models.Pagantes, {foreignKey: 'pagante_id', as: 'pagante_owner'});
    }
}

module.exports = Fichas;