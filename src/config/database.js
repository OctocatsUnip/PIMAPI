//Arquivo de configurações das credenciais do banco
//aqui estamos passando um objeto com nome do bano, user, senha etc

module.exports = {

    dialect: '',
    host: '',
    port: '',
    username: '',
    password: '',
    database: '',
    define:{
        timestamps: true, //criação dos registros no banco de quando foi realizado alteração
        underscored: true //para transformação de possiveis frases "exemplo_traco" em "exemploTraco"
    }
};

//passamos essas credenciais lá para o .sequelizerc na root