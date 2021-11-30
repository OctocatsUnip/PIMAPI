//controller lidam com as requisições e devolvem para o front uma resposta
const Status = require('../models/Status');

module.exports = {

    async index(req, res){
      try{
          //existem diversos metodos de encontrar, estou usando para pegar todos
        const status = await Status.findAll();        

        return res.json(status);
      }  catch(err){
          console.log(err);
      }
    },

    async findByName(req, res){
        const {nome_status} = req.params;
        
        const status = await Status.findOne({where:{nome_status:nome_status}});
        return res.json(status);
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res){

        //quando for criado uma pessoa, será enviado atraves do body da requisição
        const { nome_status} = req.body;


            try{
            //toda manipulação do banco é assincrona, colocar await
            const status = await Status.create({nome_status}); 
            return res.json(status);

            } catch(err){
                console.log(err);
            }
            
    }

};