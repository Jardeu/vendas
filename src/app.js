const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json()); // Middleware para analisar JSON

// Usar as rotas de usuário
app.use('/', userRoutes);

module.exports = app;
