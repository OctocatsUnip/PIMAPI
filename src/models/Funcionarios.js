const { Model, DataTypes } = require('sequelize');

class Funcionarios extends Model{
    static init(sequelize){
        super.init({
            salario: DataTypes.FLOAT,
            horario_trabalho: DataTypes.DATE,
        }, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Pessoa, {foreignKey: 'pessoa_id', as: 'pessoa_owner'});
        this.belongsTo(models.UsuarioSistema, {foreignKey: 'usuario_sistema_id', as: 'usuario_sistema_owner'});
        this.belongsTo(models.Cargos, {foreignKey: 'cargo_id', as: 'cargo_owner'});
    }
}

module.exports = Funcionarios;