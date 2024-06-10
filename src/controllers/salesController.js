const salesService = require('../services/salesService');

const salesController = {
    findAll: async (req, res) => {
        try {
            const user_id = req.user.userId;

            const sales = await salesService.findAllSales(user_id);
            res.status(200).json({ sales });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // Criar uma nova venda
    createSale: async (req, res) => {
        try {
            const user_id = req.user.userId;
            const newSale = { ...req.body, user_id };

            await salesService.createSale(newSale);
            res.status(201).json({ message: 'Venda criada com sucesso.' });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    updateSale: async (req, res) => {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            await salesService.updateSale(id, updatedFields);
            res.status(200).json({ message: 'Venda atualizada com sucesso.' });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteSale: async (req, res) => {
        try {
            const id = req.params.id;

            await salesService.deleteSale(id);
            res.status(200).json({ message: 'Venda excluída com sucesso.' });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};

module.exports = salesController;
