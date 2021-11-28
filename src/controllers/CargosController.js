//controller lidam com as requisições e devolvem para o front uma resposta
const Cargos = require('../models/Cargos');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const cargos = await Cargos.findAll();

            return res.json(cargos);
        } catch (err) {
            console.log(err);
        }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma cargos, será enviado atraves do body da requisição
        const { nome_cargo } = req.body;

        try {
            //toda manipulação do banco é assincrona, colocar await
            const cargos = await Cargos.create({ nome_cargo });
            return res.json(cargos);
        } catch (err) {
            console.log(err);
        }
    }
};