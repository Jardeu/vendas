const db = require('../database/db');

const userModel = {
    //Inserir um novo registro de usuário no banco de dados
    createUser: async (user) => {
        const { email, senha } = user;
        const query = `INSERT INTO usuarios (email, senha) VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            db.run(query, [email, senha], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, message: "Usuário criado com sucesso." });
                }
            });
        });
    },

    findByEmail: async (email) => {
        const query = `SELECT * FROM usuarios WHERE email = ?`;

        return new Promise((resolve, reject) => {
            db.get(query, [email], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }
};

module.exports = userModel;
