const { Model, DataTypes } = require('sequelize');

class QuartoBeneficios extends Model{
    static init(sequelize){
        super.init({}, {
            sequelize, //sequelize: connection
            freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Quartos, {foreignKey: 'quarto_id', as: 'quarto_owner'});
        this.belongsTo(models.Beneficios, {foreignKey: 'beneficio_id', as: 'beneficio_owner'});
    }
}

module.exports = QuartoBeneficios;