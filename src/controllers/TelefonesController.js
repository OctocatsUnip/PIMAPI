const Pessoas = require("../models/Pessoas");
const Telefones = require("../models/Telefones");


module.exports = {

    async index(req, res){
        const {pessoa_id} = req.params;

        const pessoa = await Pessoas.findByPk(pessoa_id, {
            include: {association: 'telefone_owner'} //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json(pessoa);
    },

    async store(req, res){
        try{
         
         const { pessoa_id} = req.params;
         const {numero, tipo} = req.body;

         const pessoa = await Pessoas.findByPk(pessoa_id);

        if (!pessoa){
            return res.status(400).json({error: 'person not found'});
        }

        const telefone = await Telefones.create({
            numero,
            tipo,
            pessoa_id
        });

        return res.json(telefone);

      }  catch(err){
          console.log(err);
      }
    }
}