const { Model, DataTypes } = require('sequelize');

class Fichas extends Model{
    static init(sequelize){
        super.init({
            checkin: DataTypes.DATE,
            checkout: DataTypes.DATE,
            quantidade_pessoas: DataTypes.INTEGER,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.hasOne(models.Quartos, {foreignKey: 'quarto_id', as: 'quarto_owner'});
        this.belongsTo(models.Pagantes, {foreignKey: 'pagante_id', as: 'pagante_owner'});
    }
}

module.exports = Fichas;