const { Model, DataTypes } = require('sequelize');

class User_Cliente extends Model{
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            senha: DataTypes.STRING            
        }, {
            sequelize,//sequelize: connection
            freezeTableName: true
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoas, {foreignKey: 'pessoa_id', as: 'user_cliente_owner'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    }
}

module.exports = User_Cliente;