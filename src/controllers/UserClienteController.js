const UserCliente = require("../models/User_Cliente");
const Pessoas = require("../models/Pessoas");

module.exports = {

    async index(req, res){
        const {pessoa_id} = req.params;

        const pessoa = await Pessoas.findByPk(pessoa_id, {
            include: {association: 'user_cliente_owner'} //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json( pessoa );
    },

    async store(req, res){
        try{
         
         const {pessoa_id} = req.params;
         const {email, senha} = req.body;

         const pessoa = await Pessoas.findByPk(pessoa_id);

        if (!pessoa){
            return res.status(400).json({error: 'person not found'});
        }

        const user = await UserCliente.create({
            email,
            senha,
            pessoa_id
        });

        return res.json(user);

      }  catch(err){
          console.log(err);
      }
    }
}