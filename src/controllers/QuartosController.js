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

        const { Nome_quarto, Valor_quarto, Quantia_camas, Quantia_banheiros, Img_quarto, Descricao_quarto} = req.body;

        const [nome_quarto, valor_quarto, quantia_camas, quantia_banheiros, img_quarto, descricao_quarto] = [Nome_quarto, Valor_quarto, Quantia_camas, Quantia_banheiros, Img_quarto, Descricao_quarto];

        // console.log("Merda 2:", req.body);

        try{

            // const quarto_print = {nome_quarto, valor_quarto, quantia_camas, quantia_banheiros, img_quarto};
            // console.log("Aqui está essa merda:", quarto_print);

            const quarto = await Quartos.create({nome_quarto, valor_quarto, quantia_camas, quantia_banheiros, img_quarto});
            return res.json(quarto);
        }catch(err){
            console.log(err);
        }
    }
}