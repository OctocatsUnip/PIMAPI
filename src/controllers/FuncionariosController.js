const Funcionarios = require("../models/Funcionarios");
const Pessoas = require("../models/Pessoas");

module.exports = {

    async index(req, res){
        const {pessoa_id} = req.params;

        const pessoa = await Pessoas.findByPk(pessoa_id, {
            include: {association: 'funcionario_owner'} //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json(pessoa);
    },

    async store(req, res){
        try{
         
         const { pessoa_id} = req.params;
         const {salario} = req.body;

         const pessoa = await Pessoas.findByPk(pessoa_id);

        if (!pessoa){
            return res.status(400).json({error: 'person not found'});
        }

        const funcionario = await Funcionarios.create({
            salario,
            pessoa_id
        });

        return res.json(funcionario);

      }  catch(err){
          console.log(err);
      }
    }
}