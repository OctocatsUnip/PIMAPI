const { Model, DataTypes } = require('sequelize');

class UsuarioSistema extends Model{
    static init(sequelize){
        super.init({
            nome_usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Cargos, {foreignKey: 'cargo_id', as: 'cargo_owner'});
    }
}

module.exports = UsuarioSistema;