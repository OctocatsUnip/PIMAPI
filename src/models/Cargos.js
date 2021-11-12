const { Model, DataTypes } = require('sequelize');

class Cargos extends Model {
    static init(sequelize) {
        super.init({
            nome_cargo: DataTypes.STRING
        }, {
            sequelize,//sequelize: connection
            // freezeTableName : true
        })
    }

    // static associate(models){
    //     this.hasMany(models.Endereco, {foreignKey: 'pessoa_id', as: 'adresses'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    // }
}

module.exports = Cargos;