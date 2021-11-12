//controller lidam com as requisições e devolvem para o front uma resposta
const Pratos = require('../models/Pratos');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const pratos = await Pratos.findAll();

            return res.json(pratos);
        } catch (err) {
            console.log(err);
        }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma pratos, será enviado atraves do body da requisição
        const { nome_prato, valor_prato } = req.body;

        try {
            //toda manipulação do banco é assincrona, colocar await
            const pratos = await Pratos.create({ nome_prato, valor_prato });
            return res.json(pratos);
        } catch (err) {
            console.log(err);
        }
    }
};