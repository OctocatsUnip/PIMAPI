const { Model, DataTypes } = require('sequelize');

class Telefones extends Model{
    static init(sequelize){
        super.init({
            celular: DataTypes.STRING,
            fixo: DataTypes.STRING,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoa, {foreignKey: 'pessoa_id', as: 'telefones_owner'}); //enderco pertence a model pessoa, e passamos qual a Fk que referencia a tabela de Pessoa, mas é o nome que vc quiser dar para o relacionamento
    }
}

module.exports = Telefones;