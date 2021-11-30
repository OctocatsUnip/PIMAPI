const Quartos = require('../models/Quartos');
const Status = require('../models/Status');

module.exports = {

    async index(req, res){
        try{

            const quartos = await Quartos.findAll();

            return res.json(quartos);
        } catch(err){
            console.log(err);
        }
    },

    async findByBanheiro(req, res){
        const {quantia_banheiros, quantia_camas} = req.params;
        const { Op } = require("sequelize");
        const quartos = await Quartos.findAll({
            where: {
                [Op.and]: [
                    { Quantia_banheiros: quantia_banheiros },
                    { Quantia_camas: quantia_camas },
                ]
            }
        })
        return res.json(quartos);
    },


    async store(req, res){

        const { Nome_quarto, Valor_quarto, Quantia_camas, Quantia_banheiros, Img_quarto, Descricao_quarto} = req.body;

        const [nome_quarto, valor_quarto, quantia_camas, quantia_banheiros, img_quarto, descricao_quarto] = [Nome_quarto, Valor_quarto, Quantia_camas, Quantia_banheiros, Img_quarto, Descricao_quarto];

        // status_owner

        const status_default = await Status.findOne({where:{nome_status:"disponivel"}});        
        const {id, nome_status} = status_default;

        const status_id = id;

        try{
            const quarto = await Quartos.create({nome_quarto, valor_quarto, quantia_camas, quantia_banheiros, img_quarto, descricao_quarto, status_id});
            return res.json(quarto);
        }catch(err){
            console.log(err);
        }
    },

    async updateStatus(req, res){
        const {nome_quarto} = req.params;
        const {escolha_status} = req.body;

        const status_choice = await Status.findOne({where:{nome_status:escolha_status}});        
        const {id, nome_status} = status_choice;

        const status_id = id;
        
        try{
            const mudanca = await Quartos.update({status_id: status_id}, {
                where: {
                    nome_quarto: nome_quarto
                }
            });
            return res.json(mudanca);
        }catch(err){
            console.log(err);
        }
    }
}