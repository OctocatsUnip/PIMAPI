//controller lidam com as requisições e devolvem para o front uma resposta
const ListaPedidosServicos = require('../models/ListaPedidosServicos');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const listaPedidosServicos = await ListaPedidosServicos.findAll();

            return res.json(listaPedidosServicos);
        } catch (err) {
            console.log(err);
        }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma listaPedidosServicos, será enviado atraves do body da requisição
        const { nome_servico } = req.body;

        try {
            //toda manipulação do banco é assincrona, colocar await
            const listaPedidosServicos = await ListaPedidosServicos.create({ nome_servico });
            return res.json(listaPedidosServicos);

        } catch (err) {
            console.log(err);
        }
    }
};