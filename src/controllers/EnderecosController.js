const Enderecos = require("../models/Enderecos");
const Pessoas = require("../models/Pessoas");

module.exports = {

    async index(req, res){
        const {pessoa_id} = req.params;

        const pessoa = await Pessoas.findByPk(pessoa_id, {
            include: {association: 'endereco_owner'} //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json(pessoa);
    },

    async store(req, res){
        try{
         
         const { pessoa_id} = req.params;
         const {logradouro, numero, bairro, cidade, estado, cep} = req.body;

         const pessoa = await Pessoas.findByPk(pessoa_id);

        if (!pessoa){
            return res.status(400).json({error: 'person not found'});
        }

        const endereco = await Enderecos.create({
            logradouro, 
            numero, 
            bairro, 
            cidade, 
            estado, 
            cep,
            pessoa_id
        });

        return res.json(endereco);

      }  catch(err){
          console.log(err);
      }
    }
}