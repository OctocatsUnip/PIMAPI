const Endereco = require("../models/Endereco");
const Pessoa = require("../models/Pessoa");
const { index } = require("./PessoaController");

module.exports = {

    async index(req, res){
        const {pessoa_id} = req.params;

        const pessoa = await Pessoa.findByPk(pessoa_id, {
            include: {association: 'adresses'} //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json(pessoa);
    },

    async store(req, res){
        try{
         
         const { pessoa_id} = req.params;
         const {cep, rua, number} = req.body;

         const pessoa = await Pessoa.findByPk(pessoa_id);

        if (!pessoa){
            return res.status(400).json({error: 'person not found'});
        }

        const endereco = await Endereco.create({
            cep,
            rua,
            number,
            pessoa_id
        });

        return res.json(endereco);

      }  catch(err){
          console.log(err);
      }
    }
}