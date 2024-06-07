const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/register', userController.register);

// Rota para login
router.post('/login', userController.login);

module.exports = router;