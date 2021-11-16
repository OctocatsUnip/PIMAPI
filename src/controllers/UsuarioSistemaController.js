const UsuarioSistema = require("../models/UsuarioSistema");
const Cargos = require("../models/Cargos");
const { index } = require("./CargosController");

module.exports = {

    async index(req, res){
        const {cargo_id} = req.params;

        const cargos = await Cargos.findByPk(cargo_id, {
            include: {association: 'cargo_owner'} //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json(cargos);
    },

    async store(req, res){
        try{
         
         const {cargo_id} = req.params;
         const {nome_usuario, senha} = req.body;

         const cargos = await Cargos.findByPk(cargo_id);

        if (!cargos){
            return res.status(400).json({error: 'person not found'});
        }

        const usuarioSistema = await UsuarioSistema.create({
            nome_usuario,
            senha,
            cargo_id
        });

        return res.json(usuarioSistema);

      }  catch(err){
          console.log(err);
      }
    }
}