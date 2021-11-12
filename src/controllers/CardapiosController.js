//controller lidam com as requisições e devolvem para o front uma resposta
const Cardapios = require('../models/Cardapios');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const cardapios = await Cardapios.findAll();

            return res.json(cardapios);
        } catch (err) {
            console.log(err);
        }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma cardapios, será enviado atraves do body da requisição
        const { dia_semana } = req.body;

        try {
            //toda manipulação do banco é assincrona, colocar await
            const cardapios = await Cardapios.create({ dia_semana });
            return res.json(cardapios);

        } catch (err) {
            console.log(err);
        }
    }
};