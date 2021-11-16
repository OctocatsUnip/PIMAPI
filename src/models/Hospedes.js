const { Model, DataTypes } = require('sequelize');

class Hospedes extends Model{
    static init(sequelize){
        super.init({}, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoa, {foreignKey: 'pessoa_id', as: 'pessoa_owner'});
        this.belongsTo(models.Fichas, {foreignKey: 'ficha_id', as: 'ficha_owner'});
    }
}

module.exports = Hospedes;