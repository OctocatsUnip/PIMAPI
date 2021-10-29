const { Model, DataTypes } = require('sequelize');

class Quartos extends Model{
    static init(sequelize){
        super.init({
            nome_quarto: DataTypes.STRING,
            valor_quarto: DataTypes.DECIMAL,
            quantia_camas: DataTypes.INTEGER,
            quantia_banheiros: DataTypes.INTEGER,
            img_quarto: DataTypes.INTEGER
        }, {
            sequelize,//sequelize: connection
            // freezeTableName : true
        })
    }

    // static associate(models){
    //     this.hasMany(models.Endereco, {foreignKey: 'pessoa_id', as: 'adresses'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
    // }
}

module.exports = Quartos;