const { Model, DataTypes } = require('sequelize');

class Endereco extends Model{
    static init(sequelize){
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoa, {foreignKey: 'pessoa_id', as: 'owner'}); //enderco pertence a model pessoa, e passamos qual a Fk que referencia a tabela de Pessoa, mas é o nome que vc quiser dar para o relacionamento
    }
}

module.exports = Endereco;