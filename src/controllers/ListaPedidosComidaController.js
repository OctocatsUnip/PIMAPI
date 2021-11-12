//controller lidam com as requisições e devolvem para o front uma resposta
const ListaPedidosComida = require('../models/ListaPedidosComida');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const listaPedidosComida = await ListaPedidosComida.findAll();

            return res.json(listaPedidosComida);
        } catch (err) {
            console.log(err);
        }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma listaPedidosComida, será enviado atraves do body da requisição
        const { itens_estaticos } = req.body;

        try {
            //toda manipulação do banco é assincrona, colocar await
            const listaPedidosComida = await ListaPedidosComida.create({ itens_estaticos });
            return res.json(listaPedidosComida);

        } catch (err) {
            console.log(err);
        }
    }
};