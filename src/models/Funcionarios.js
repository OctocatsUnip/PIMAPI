const { Model, DataTypes } = require('sequelize');

class Funcionarios extends Model{
    static init(sequelize){
        super.init({
            salario: DataTypes.DECIMAL,
        }, {
            sequelize,//sequelize: connection            
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoas, {foreignKey: 'pessoa_id', as: 'funcionario_owner'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
        this.hasOne(models.UserSistema, {foreignKey: 'funcionario_id', as: 'user_sistema_owner'});
    }
}

module.exports = Funcionarios;