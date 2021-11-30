const { Model, DataTypes } = require('sequelize');

class Beneficios extends Model{
    static init(sequelize){
        super.init({
            nome_beneficio: DataTypes.STRING,
            valor_beneficio: DataTypes.DECIMAL,
        }, {
            sequelize,//sequelize: connection            
        })
    }

    // static associate(models){
    //     this.belongsToMany(models.Reservas, { foreignKey: 'beneficio_id', through: 'reservas_beneficios', as: 'reservas_possuem_beneficio'});
    // }

}

module.exports = Beneficios;