const { Model, DataTypes } = require('sequelize');

class UsuarioCliente extends Model{
    static init(sequelize){
        super.init({
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            img_usuario: DataTypes.STRING,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoa, {foreignKey: 'pessoa_id', as: 'login_owner'});
    }
}

module.exports = UsuarioCliente;