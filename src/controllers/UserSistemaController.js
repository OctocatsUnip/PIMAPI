const UserSistema = require("../models/User_Sistema");
const Funcionarios = require("../models/Funcionarios");

module.exports = {

    async index(req, res) {
        const { funcionario_id } = req.params;

        const funcionario = await Funcionarios.findByPk(funcionario_id, {
            include: { association: 'user_sistema_owner' } //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json(funcionario);
    },


    async getUsers(req, res) {

        const usuarios = await UserSistema.findAll();

        return res.json(usuarios);
    },

    async store(req, res) {
        try {

            const { funcionario_id } = req.params;

            const { Usuario, Senha } = req.body;
            const [nome_usuario, senha] = [Usuario, Senha];

            const funcionario = await Funcionarios.findByPk(funcionario_id);

            if (!funcionario) {
                return res.status(400).json({ error: 'person not found' });
            }

            const user = await UserSistema.create({
                nome_usuario,
                senha,
                is_admin: false,
                funcionario_id
            });

            return res.json(user);

        } catch (err) {
            console.log(err);
        }
    }
}