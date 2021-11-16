//controller lidam com as requisições e devolvem para o front uma resposta
const Pagantes = require('../models/Pagantes');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const pagantes = await Pagantes.findAll();

            return res.json(pagantes);
        } catch (err) {
            console.log(err);
        }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma pagantes, será enviado atraves do body da requisição
        const { } = req.body;

        try {
            //toda manipulação do banco é assincrona, colocar await
            const pagantes = await Pagantes.create({ });
            return res.json(pagantes);

        } catch (err) {
            console.log(err);
        }
    }
};