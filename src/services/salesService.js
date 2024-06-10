const salesModel = require('../models/salesModel');
const generatePDF = require('../utils/generatePDF');

const salesService = {
    // Adicionar uma venda
    createSale: async (sale) => {
        const { nome_cliente, produto, valor, data_venda, user_id } = sale;

        if (valor <= 0) {
            throw new Error('O valor da venda deve ser positivo.');
        }

        const newSale = { nome_cliente, produto, valor, data_venda, user_id };

        return await salesModel.createSale(newSale);
    },

    // Consultar vendas
    findAllSales: async (user_id) => {
        return await salesModel.findAll(user_id);
    },

    // Editar venda
    updateSale: async (id, updatedFields) => {
        if (updatedFields.valor && updatedFields.valor <= 0) {
            throw new Error('O valor da venda deve ser positivo.');
        }

        return await salesModel.updateSale(id, updatedFields);
    },

    // Excluir venda
    deleteSale: async (id) => {
        return await salesModel.deleteSale(id);
    },

    // Gerar PDF
    generateSalesPDF: async (userId, startDate, endDate) => {
        const sales = await salesModel.findByDateInterval(userId, startDate, endDate);

        if (!sales || sales.length === 0) {
            throw new Error('Nenhuma venda encontrada para o período especificado.');
        }

        return generatePDF(sales, startDate, endDate);
    }
};

module.exports = salesService;
