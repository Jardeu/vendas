const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const userService = {
    //Registrar um usuário
    createUser: async (user) => {
        if (!user.email || !user.senha) {
            throw new Error('Todos os campos são obrigatórios.');
        }

        const { email, senha } = user;
        const hashedPassword = await bcrypt.hash(senha, 10);
        const newUser = { email: email, senha: hashedPassword };

        await userModel.createUser(newUser);
    },


};

module.exports = userService;
