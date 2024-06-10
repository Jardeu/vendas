const express = require('express');
const userRoutes = require('./routes/userRoutes');
const salesRoutes = require('./routes/salesRoutes');
const verifyToken = require('./middlewares/authMiddleware')
const app = express();

app.use(express.json()); // Middleware para analisar JSON

// Usar as rotas de usuário
app.use('/', userRoutes);

// Middleware para proteger as rotas de vendas com autenticação JWT
app.use(verifyToken);

// Usar as rotas de vendas
app.use('/sales', salesRoutes);

module.exports = app;
