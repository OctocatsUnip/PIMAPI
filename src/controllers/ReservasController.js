const Beneficios = require('../models/Beneficios');
const Pessoas = require('../models/Pessoas');
const Quartos = require('../models/Quartos');
const Reservas = require('../models/Reservas');

module.exports = {

    async index(req, res) {
        try {

            const { quarto_id } = req.params;

            const reserva = await Reservas.findAll({
                include: [
                    {
                        model: Pessoas,
                        as: 'PessoasOwner',
                        through: { attributes: [] },
                    }
                ]
            });

            const result = reserva.filter((item) => item.quarto_id == quarto_id);

            return res.json(result);
        } catch (err) {
            console.log(err);
        }
    },

    async AllReserve(req, res) {
        try {

            const reserva = await Reservas.findAll({
                include: [
                    {
                        model: Pessoas,
                        as: 'PessoasOwner',
                        through: { attributes: [] },
                    }
                ]
            });

            return res.json(reserva);
        } catch (err) {
            console.log(err);
        }
    },

    async store(req, res) {

        // const { quarto_id } = req.params;
        const { data_inicio, data_final, valores_beneficios, quarto_id, pessoas } = req.body;

        const quarto = await Quartos.findOne({ where: { id: quarto_id } });

        const { valor_quarto } = quarto;

        const data_checkout = data_final;

        let diferencaDatas = new Date(data_final).getTime() - new Date(data_inicio).getTime();
        valor_diarias = valor_quarto * (Math.ceil(diferencaDatas / (1000 * 3600 * 24)));

        console.log(Math.ceil(diferencaDatas / (1000 * 3600 * 24)));


        try {
            const reserva = await Reservas.create({ data_inicio, data_final, data_checkout, valor_diarias, valores_beneficios, quarto_id });

            reserva.setPessoasOwner(pessoas);
            console.log(pessoas);

            return res.json(reserva);
        } catch (err) {
            console.log(err);
        }
    },
}