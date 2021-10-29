const Quartos = require('../models/Quartos');
const { index, store } = require('./PessoaController');

module.exports = {
    
    async index(req, res){
        try{

            const quartos = await Quartos.findAll();

            return res.json(quartos);
        } catch(err){
            console.log(err);
        }
    },

    async store(req, res){

        const { nome_quarto, valor_quarto, quantia_camas, quantia_banheiros, img_quarto} = req.body;

        try{
            const quarto = await Quartos.create({nome_quarto, valor_quarto, quantia_camas, quantia_banheiros, img_quarto});
            return res.json(quarto);
        }catch(err){
            console.log(err);
        }
    }
}