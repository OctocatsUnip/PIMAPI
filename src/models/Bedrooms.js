const { Model, DataTypes } = require('sequelize');

class Bedroom extends Model{
    static init(sequelize){
        super.init({
            valor: DataTypes.DECIMAL,
            numBed: DataTypes.INTEGER
        }, {
            sequelize //sequelize: connection
        })
    }
}

module.exports = Bedroom;