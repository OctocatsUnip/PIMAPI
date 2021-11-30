const { Model, DataTypes } = require('sequelize');

class UserSistema extends Model{
    static init(sequelize){
        super.init({
            nome_usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            is_admin: DataTypes.BOOLEAN
        }, {
            sequelize,//sequelize: connection
            freezeTableName: true
        })
    }

    static associate(models){
        this.belongsTo(models.Funcionarios, {foreignKey: 'funcionario_id', as: 'user_sistema_owner'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    }
}

module.exports = UserSistema;