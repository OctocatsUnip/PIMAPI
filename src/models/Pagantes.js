const { Model, DataTypes } = require('sequelize');

class Pagantes extends Model {
    static init(sequelize) {
        super.init({}, {
            sequelize,//sequelize: connection
            // freezeTableName : true
        })
    }
}

module.exports = Pagantes;