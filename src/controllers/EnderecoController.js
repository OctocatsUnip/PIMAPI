const Endereco = require("../models/Endereco");
const Pessoa = require("../models/Pessoa");

module.exports = {
    async store(req, res){
        try{
         
         const { pessoa_id} = req.params;
         const {cep, rua, number} = req.body;

         const pessoa = await Pessoa.findByPk(pessoa_id);

        if (!pessoa){
            return res.status(400).json({error: 'person not found'});
        }

        const endereco = await Endereco.Create({
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