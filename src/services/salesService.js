const salesModel = require('../models/salesModel');

const salesService = {
    // Adicionar uma venda
    createSale: async (sale) => {
        if (!sale.nome_cliente || !sale.produto || !sale.valor || !sale.data_venda) {
            throw new Error('Todos os campos são obrigatórios.');
        }

        const { nome_cliente, produto, valor, data_venda, user_id } = sale;
        const newSale = { nome_cliente, produto, valor, data_venda, user_id };

        await salesModel.createSale(newSale);
    },
    // Consultar vendas
    findAllSales: async (user_id) => {
        return await salesModel.findAll(user_id);
    },

    // Editar venda
    updateSale: async (id, updatedFields) => {
        if (!id) {
            throw new Error('Não foi possível atualizar a venda.');
        }

        return await salesModel.updateSale(id, updatedFields);
    },

    // Excluir venda
    deleteSale: async (id) => {
        if (!id) {
            throw new Error('Não foi possível excluir a venda.');
        }

        await salesModel.deleteSale(id);
    }
};

module.exports = salesService;
