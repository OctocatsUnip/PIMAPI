const { Model, DataTypes } = require('sequelize');

class Quartos extends Model{
    static init(sequelize){
        super.init({
            nome_quarto: DataTypes.STRING,
            valor_quarto: DataTypes.DECIMAL,
            quantia_camas: DataTypes.INTEGER,
            quantia_banheiros: DataTypes.INTEGER,
            img_quarto: DataTypes.STRING,
            descricao_quarto: DataTypes.STRING
        }, {
            sequelize,//sequelize: connection
            // freezeTableName : true
        })
    }

    static associate(models){
        this.belongsTo(models.Status, {foreignKey: 'status_id', as: 'status_owner'}); //fazemos a associacao de que uma pessoa possui muitos enderecos
        // this.hasOne(models.Reservas, {foreignKey: 'pessoa_id', as: 'quarto_owner'}); //enderco pertence a model pessoa, e passamos qual a Fk que referencia a tabela de Pessoa, mas é o nome que vc quiser dar para o relacionamento
    }
}

module.exports = Quartos;