const { Model, DataTypes } = require('sequelize');

class Pessoas extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            data_nascimento: DataTypes.DATEONLY,
            sexo: DataTypes.STRING,
        }, {
            sequelize,//sequelize: connection
        })
    }

    static associate(models){
        this.hasMany(models.Telefones, {foreignKey: 'pessoa_id', as: 'telefone_owner'});
    }

    static associate(models){
        this.hasOne(models.Enderecos, {foreignKey: 'pessoa_id', as: 'endereco_owner'}); 
    }

    static associate(models){
        this.hasOne(models.Funcionarios, {foreignKey: 'pessoa_id', as: 'funcionario_owner'});
    }

    static associate(models){
        this.hasOne(models.User_Cliente, {foreignKey: 'pessoa_id', as: 'user_cliente_owner'});
    }
}

module.exports = Pessoas;