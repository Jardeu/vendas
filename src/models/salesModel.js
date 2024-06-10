const db = require('../database/db');

const salesModel = {
    // Inserir uma nova venda no banco de dados
    createSale: async (sale) => {
        const { nome_cliente, produto, valor, data_venda, user_id } = sale;
        const query = `INSERT INTO vendas (nome_cliente, produto, valor, data_venda, user_id) VALUES (?, ?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            db.run(query, [nome_cliente, produto, valor, data_venda, user_id], function (err) {
                if (err) {
                    reject(new Error('Não foi possível criar a venda.'));
                } else {
                    resolve({ id: this.lastID, message: "Venda criada com sucesso." });
                }
            });
        });
    },

    // Consultar todas as vendas com o id do usuário autenticado
    findAll: async (user_id) => {
        const query = `SELECT * FROM vendas WHERE user_id = ?`;

        return new Promise((resolve, reject) => {
            db.all(query, [user_id], (err, row) => {
                if (err) {
                    reject(new Error('Não foi possível consultar as vendas.'));
                } else {
                    resolve(row);
                }
            });
        });
    },

    // Editar uma venda existente
    updateSale: async (id, updatedFields) => {
        const fields = Object.keys(updatedFields);
        const values = Object.values(updatedFields);

        const setClause = fields.map(field => `${field} = ?`).join(', ');
        const query = `UPDATE vendas SET ${setClause} WHERE id = ?`;

        return new Promise((resolve, reject) => {
            db.run(query, [...values, id], function (err) {
                if (err) {
                    reject(new Error('Não foi possível atualizar a venda.'));
                } else {
                    resolve({ message: "Venda atualizada com sucesso." });
                }
            });
        });
    },

    // Excluir uma venda existente
    deleteSale: async (id) => {
        const query = `DELETE FROM vendas WHERE id = ?`;

        return new Promise((resolve, reject) => {
            db.run(query, [id], function (err) {
                if (err) {
                    reject(new Error('Não foi excluir a venda.'));
                } else {
                    resolve({ message: "Venda excluída com sucesso." });
                }
            });
        });
    }
};

module.exports = salesModel;
