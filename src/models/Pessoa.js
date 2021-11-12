const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model{
    static init(sequelize){
        super.init({
            nome_pessoa: DataTypes.STRING,
            rg: DataTypes.STRING,
            cpf: DataTypes.STRING,
            dt_nascimento: DataTypes.DATE,
            sexo: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize,//sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.hasMany(models.Endereco, {foreignKey: 'pessoa_id', as: 'adresses'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
        this.hasMany(models.Telefones, {foreignKey: 'pessoa_id', as: 'phone'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    }
}

module.exports = Pessoa;