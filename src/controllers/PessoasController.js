//controller lidam com as requisições e devolvem para o front uma resposta
const Pessoas = require('../models/Pessoas');

module.exports = {

    async index(req, res){
      try{
          //existem diversos metodos de encontrar, estou usando para pegar todos
        const pessoa = await Pessoas.findAll();        

        return res.json(pessoa);
      }  catch(err){
          console.log(err);
      }
    },

    async findByCpf(req, res){
        const {cpf} = req.params;
        const pessoa = await Pessoas.findOne({where:{cpf:cpf}});
        return res.json(pessoa);
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res){

        //quando for criado uma pessoa, será enviado atraves do body da requisição
        const { nome, cpf, rg, data_nascimento, sexo} = req.body;


            try{
            //toda manipulação do banco é assincrona, colocar await
            const pessoa = await Pessoas.create({nome, cpf, rg, data_nascimento, sexo}); 
            return res.json(pessoa);

            } catch(err){
                console.log(err);
            }
            
    }

};