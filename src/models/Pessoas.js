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
        this.hasOne(models.Enderecos, {foreignKey: 'pessoa_id', as: 'endereco_owner'}); 
        this.hasOne(models.Funcionarios, {foreignKey: 'pessoa_id', as: 'funcionario_owner'});
        this.hasOne(models.User_Cliente, {foreignKey: 'pessoa_id', as: 'user_cliente_owner'});

        Pessoas.belongsToMany(models.Reservas, { through: 'Reservas_Pessoas', as: 'ReservasOwner', foreignKey: 'pessoa_id'});
    }
}

module.exports = Pessoas;