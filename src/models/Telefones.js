const { Model, DataTypes } = require('sequelize');

class Telefones extends Model{
    static init(sequelize){
        super.init({
            numero: DataTypes.INTEGER,
            tipo: DataTypes.STRING,
            pessoa_id: DataTypes.STRING
        }, {
            sequelize, //sequelize: connection            
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoas, {foreignKey: 'pessoa_id', as: 'telefone_owner'})
    }
}

module.exports = Telefones;