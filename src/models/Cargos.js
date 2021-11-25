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

    static associate(models){
        this.hasMany(models.Funcionarios, {primaryKey: 'funcionario_id', as: 'funcionario_owner'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    }
}

module.exports = Cargos;