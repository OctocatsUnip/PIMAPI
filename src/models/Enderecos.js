const { Model, DataTypes } = require('sequelize');

class Enderecos extends Model{
    static init(sequelize){
        super.init({
            logradouro: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            cep: DataTypes.INTEGER,
        }, {
            sequelize, //sequelize: connection            
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoas, {foreignKey: 'pessoa_id', as: 'endereco_owner'}); //enderco pertence a model pessoa, e passamos qual a Fk que referencia a tabela de Pessoa, mas é o nome que vc quiser dar para o relacionamento
    }
}

module.exports = Enderecos;