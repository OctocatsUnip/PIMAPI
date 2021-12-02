//controller lidam com as requisições e devolvem para o front uma resposta
const Pessoas = require('../models/Pessoas');
const Telefones = require('../models/Telefones');

module.exports = {

    async index(req, res) {
        try {
            //existem diversos metodos de encontrar, estou usando para pegar todos
            const pessoa = await Pessoas.findAll();

            return res.json(pessoa);
        } catch (err) {
            console.log(err);
        }
    },

    async findByCpf(req, res) {
        const { cpf } = req.params;
        const pessoas = await Pessoas.findOne({ where: { cpf: cpf } });
        return res.json(pessoas);
    },

    async findPessoaData(req, res) {
        const { cpf } = req.params;
        const pessoas = await Pessoas.findOne({
            attributes: ['nome', 'cpf'],
            include: [
                {
                    model: Telefones,
                    attributes: ['numero'],
                    association: 'telefone_owner'
                },
            ],
            where: {
                cpf: cpf
            }
        });

        return res.json(pessoas);
    },

    //vai armazenar um usuario de forma assincrona a aplicação
    async store(req, res) {

        //quando for criado uma pessoa, será enviado atraves do body da requisição
        const { nome, cpf, rg, data_nascimento, sexo } = req.body;


        try {
            //toda manipulação do banco é assincrona, colocar await
            const pessoa = await Pessoas.create({ nome, cpf, rg, data_nascimento, sexo });
            return res.json(pessoa);

        } catch (err) {
            console.log(err);
        }

    }

};