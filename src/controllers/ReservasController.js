const Beneficios = require('../models/Beneficios');
const Quartos = require('../models/Quartos');
const Reservas = require('../models/Reservas');

module.exports = {

    async index(req, res){
        try{

            const { quarto_nome} = req.params;

            const quarto = await Quartos.findOne({where:{nome_quarto:quarto_nome}}); 
            const {id} = quarto;

            const reserva = await Reservas.findOne({where:{quarto_id:id}});

            return res.json(reserva);
        } catch(err){
            console.log(err);
        }
    },

    async store(req, res){
        
        const { quarto_nome} = req.params;

        var beneficio_nome = req.body;
        const { data_inicio, data_final} = req.body;  
        
        const quarto = await Quartos.findOne({where:{nome_quarto:quarto_nome}}); 
        const beneficio = await Beneficios.findOne({where:{nome_beneficio:beneficio_nome}});        

        const {valor_quarto, id} = quarto;
        const {valor_beneficio} = beneficio;   
        
        const {data_checkout} = data_final;

        const quarto_id = id;
        valor_diarias = valor_quarto*(data_final-data_inicio);
        valores_beneficios =  valor_beneficio;                         
        
        try{
            const quarto = await Reservas.create({data_inicio, data_final, data_checkout, valor_diarias, valores_beneficios, quarto_id});
            return res.json(quarto);
        }catch(err){
            console.log(err);
        }
    },
}