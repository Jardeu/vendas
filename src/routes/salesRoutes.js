const express = require('express');
const router = express.Router();

const salesController = require('../controllers/salesController');

// Rota para consultar todas as vendas
router.get('/', salesController.findAll);

// Rota para adicionar uma nova venda
router.post('/', salesController.createSale);

// Rota para editar uma venda existente
router.put('/:id', salesController.updateSale);

// Rota para excluir uma venda existente
router.delete('/:id', salesController.deleteSale);

module.exports = router;