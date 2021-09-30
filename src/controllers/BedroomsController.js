//controller lidam com as requisições e devolvem para o front uma resposta
const Bedrooms = require('../models/Bedrooms');

module.exports = {

    async index(req, res){
      try{
          //existem diversos metodos de encontrar, estou usando para pegar todos
        const bedroom = await Bedrooms.findAll();

        return res.json(bedroom);
      }  catch(err){
          console.log(err);
      }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res){

        //quando for criado um quarto, será enviado atraves do body da requisição
        const { valor, numBed } = req.body;

            try{
            //toda manipulação do banco é assincrona, colocar await
            const bedroom = await Bedrooms.create({valor, numBed}); 
            return res.json(bedroom);

            } catch(err){
                console.log(err);
            }
            
    }
};