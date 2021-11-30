//controller lidam com as requisições e devolvem para o front uma resposta
const Beneficios = require('../models/Beneficios');

module.exports = {

    async index(req, res){
      try{
          //existem diversos metodos de encontrar, estou usando para pegar todos
        const beneficios = await Beneficios.findAll();        

        return res.json(beneficios);
      }  catch(err){
          console.log(err);
      }
    },

    async findByName(req, res){
        const {nome_beneficio} = req.params;
        
        const beneficio = await Beneficios.findOne({where:{nome_beneficio:nome_beneficio}});
        return res.json(beneficio);
    },

    async store(req, res){

        const { nome_beneficio, valor_beneficio} = req.body;


            try{
            //toda manipulação do banco é assincrona, colocar await
            const beneficio = await Beneficios.create({nome_beneficio, valor_beneficio}); 
            return res.json(beneficio);

            } catch(err){
                console.log(err);
            }
            
    }

};