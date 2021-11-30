// const Beneficios = require('../models/Beneficios');
// const Quartos = require('../models/Quartos');
// const Reservas = require('../models/Reservas');

// module.exports = {

//     // async index(req, res){
//     //     try{

//     //         const quartos = await Reservas.findAll();

//     //         return res.json(quartos);
//     //     } catch(err){
//     //         console.log(err);
//     //     }
//     // },

//     async store(req, res){

//         const { nome_quarto} = req.params;
//         const { data_inicio, data_final, data_checkout, nome_beneficio} = req.body;  
        
//         const quarto = await Quartos.findOne({where:{nome_quarto:nome_quarto}}); 
//         const beneficio = await Beneficios.findOne({where:{nome_beneficio:nome_beneficio}});        

//         const {valor_quarto, id} = quarto;
//         const {valor_beneficio, id} = beneficio;

//         const quarto_id = id;
//         valor_diarias = valor_quarto*(data_final-data_inicio);
//         valor_beneficios = valor_beneficios + valor_beneficio;                         
        
//         try{
//             const quarto = await Quartos.create({data_inicio, data_final, data_checkout, valor_diarias, valor_beneficios});
//             return res.json(quarto);
//         }catch(err){
//             console.log(err);
//         }
//     },
// }