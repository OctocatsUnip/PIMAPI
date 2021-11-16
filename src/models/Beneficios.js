const { Model, DataTypes } = require('sequelize');

class Beneficios extends Model {
    static init(sequelize) {
        super.init({
            beneficio: DataTypes.STRING,
            valor_beneficio: DataTypes.INTEGER,
        }, {
            sequelize,//sequelize: connection
            // freezeTableName : true
        })
    }

    // static associate(models){
    //     this.hasMany(models.Endereco, {foreignKey: 'pessoa_id', as: 'adresses'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    // }
}

module.exports = Beneficios;