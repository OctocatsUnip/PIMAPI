//controller lidam com as requisições e devolvem para o front uma resposta
const Pessoa = require('../models/Pessoa');

module.exports = {

    async index(req, res){
      try{
          //existem diversos metodos de encontrar, estou usando para pegar todos
        const pessoa = await Pessoa.findAll();

        return res.json(pessoa);
      }  catch(err){
          console.log(err);
      }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res){

        //quando for criado uma pessoa, será enviado atraves do body da requisição
        const { nome_pessoa, rg, cpf, dt_nascimento, sexo, email } = req.body;

            try{
            //toda manipulação do banco é assincrona, colocar await
            const pessoa = await Pessoa.create({nome_pessoa, rg, cpf, dt_nascimento, sexo, email}); 
            return res.json(pessoa);

            } catch(err){
                console.log(err);
            }
            
    }
};