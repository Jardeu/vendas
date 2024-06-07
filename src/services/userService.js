const userModel = require('../models/userModel');

const userService = {
    //Registrar um usuário
    create: (user, callback) => {
        if (!user.email || !user.senha) {
            return callback(new Error('Todos os campos são obrigatórios.'));
        }
        userModel.create(user, callback);
    },

    //Fazer login
    login: (callback) => {
        console.log("Ainda não implementado");
    },
};

module.exports = userService;
