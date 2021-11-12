const Telefones = require("../models/Telefones");
const Pessoa = require("../models/Pessoa");
const { index } = require("./PessoaController");

module.exports = {

    async index(req, res) {
        const { pessoa_id } = req.params;

        const pessoa = await Pessoa.findByPk(pessoa_id, {
            include: { association: 'phone' } //aqui passa a associaçã que o sequelize deve executar - essa associação criamos na model
        });

        return res.json(pessoa);
    },

    async store(req, res) {
        try {

            const { pessoa_id } = req.params;
            const { celuar, fixo } = req.body;

            const pessoa = await Pessoa.findByPk(pessoa_id);

            if (!pessoa) {
                return res.status(400).json({ error: 'person not found' });
            }

            const telefones = await Telefones.create({
                celuar,
                fixo,
                pessoa_id
            });

            return res.json(telefones);

        } catch (err) {
            console.log(err);
        }
    }
}