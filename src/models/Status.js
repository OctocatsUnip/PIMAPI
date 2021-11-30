const { Model, DataTypes } = require('sequelize');

class Status extends Model{
    static init(sequelize){
        super.init({
            nome_status: DataTypes.STRING,
        }, {
            sequelize,//sequelize: connection
            freezeTableName: true
        })
    }

    static associate(models){
        this.hasMany(models.Quartos, {foreignKey: 'status_id', as: 'status_owner'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    }
}

module.exports = Status;