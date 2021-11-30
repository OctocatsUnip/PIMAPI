const { Model, DataTypes } = require('sequelize');

class Reservas extends Model{
    static init(sequelize){
        super.init({
            data_inicio: DataTypes.DATEONLY,
            data_final: DataTypes.DATEONLY,
            data_checkout: DataTypes.DATEONLY,
            valor_diarias: DataTypes.DECIMAL,
            valores_beneficios: DataTypes.DECIMAL,
        }, {
            sequelize, //sequelize: connection            
        })
    }

    static associate(models){
        this.belongsTo(models.Quartos, {foreignKey: 'quarto_id', as: 'quarto_owner'}); //enderco pertence a model pessoa, e passamos qual a Fk que referencia a tabela de Pessoa, mas é o nome que vc quiser dar para o relacionamento
        this.belongsToMany(models.Beneficios, { foreignKey: 'reserva_id', through: 'reservas_beneficios', as: 'beneficio_estao_reservas'});
    }
}

module.exports = Reservas;