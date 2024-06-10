const salesService = require('../services/salesService');
const moment = require('moment');

const salesController = {
    findAll: async (req, res) => {
        try {
            const userId = req.user.userId;

            if (!userId) {
                res.status(400).json({ message: 'ID do usuário é obrigatório.' });
            }

            const sales = await salesService.findAllSales(userId);
            res.status(200).json({ sales });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // Criar uma nova venda
    createSale: async (req, res) => {
        try {
            const userId = req.user.userId;
            const newSale = { ...req.body, user_id: userId };

            if (!newSale.nome_cliente || !newSale.produto || !newSale.valor || !newSale.data_venda) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
            }

            const sale = await salesService.createSale(newSale);
            res.status(201).json({ message: 'Venda criada com sucesso.', sale });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // Editar uma venda
    updateSale: async (req, res) => {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            if (!id || Object.keys(updatedFields).length === 0) {
                return res.status(400).json({ message: 'ID e campos atualizados são obrigatórios.' });
            }

            await salesService.updateSale(id, updatedFields);
            res.status(200).json({ message: 'Venda atualizada com sucesso.' });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // Excluir uma venda
    deleteSale: async (req, res) => {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ message: 'ID é obrigatório para exclusão.' });
            }

            await salesService.deleteSale(id);
            res.status(200).json({ message: 'Venda excluída com sucesso.' });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // Gerar PDF
    generateSalesPDF: async (req, res) => {
        try {
            const { start_date, end_date } = req.query;
            const userId = req.user.userId;

            if (!start_date || !end_date) {
                return res.status(400).json({ error: 'Forneça start_date e end_date no formato DD-MM-YYYY' });
            }

            // Formatar as datas para o ficar como está no banco de dados
            const startDate = moment(start_date, 'DD-MM-YYYY').format('YYYY-MM-DD');
            const endDate = moment(end_date, 'DD-MM-YYYY').format('YYYY-MM-DD');

            await salesService.generateSalesPDF(userId, startDate, endDate);
            res.status(200).json({ message: 'Relatório de vendas.' });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};

module.exports = salesController;
