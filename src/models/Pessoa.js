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
            sequelize //sequelize: connection
        })
    }
}

module.exports = Pessoa;