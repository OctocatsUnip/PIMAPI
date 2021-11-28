//controller lidam com as requisições e devolvem para o front uma resposta
const Beneficios = require('../models/Beneficios');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const beneficios = await Beneficios.findAll();

            return res.json(beneficios);
        } catch (err) {
            console.log(err);
        }
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma beneficios, será enviado atraves do body da requisição
        const { Beneficio, Valor_Beneficio } = req.body;

        const [beneficio, valor_beneficio] = [Beneficio, Valor_Beneficio]
        

        try {
            //toda manipulação do banco é assincrona, colocar await
            const beneficios = await Beneficios.create({ beneficio, valor_beneficio });
            return res.json(beneficios);
        } catch (err) {
            console.log(err);
        }
    }
};