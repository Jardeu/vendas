const db = require('../database/db');

const userModel = {
    //Inserir um novo registro de usuário no banco de dados
    create: (user, callback) => {
        const { email, senha } = user;
        const query = `INSERT INTO usuarios (email, senha) VALUES (?, ?)`;
        db.run(query, [email, senha], function (err) {
            callback(err, "Usuário criado com sucesso");
        });
    },
};

module.exports = userModel;
