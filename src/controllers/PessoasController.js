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

    async findPessoaData(req, res) {
        const { cpf } = req.params;
        const pessoas = await Pessoas.findAll({
            attributes: ['id', 'nome', 'cpf'],
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
        })
        return res.json(pessoas);
    },

    async findAllPessoaData(req, res) {

        const pessoas = await Pessoas.findAll({
            attributes: ['id', 'nome', 'cpf'],
            include: [
                {
                    model: Telefones,
                    attributes: ['numero'],
                    association: 'telefone_owner'
                },
            ]
        })
        return res.json(pessoas);
    },

    async findByCpf(req, res) {
        try {
            const { cpf } = req.params;
            const pessoas = await Pessoas.findOne({ where: { cpf: cpf } });
            if (!cpf) {
                return res.status(400).json({ error: 'person not found' });
            }
            return res.json(pessoas);
        } catch (err) {
            console.log(err);
        }

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