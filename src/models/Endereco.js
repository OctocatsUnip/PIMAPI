const { Model, DataTypes } = require('sequelize');

class Endereco extends Model{
    static init(sequelize){
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize //sequelize: connection
        })
    }
}

module.exports = Endereco;