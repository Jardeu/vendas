const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/jwt');

const userService = {
    //Registrar um usuário
    register: async (user) => {
        const { email, senha } = user;
        const hashedPassword = await bcrypt.hash(senha, 10);
        const newUser = { email, senha: hashedPassword };

        return await userModel.createUser(newUser);
    },

    //Fazer login
    login: async (user) => {
        const savedUser = await userModel.findByEmail(user.email);

        if (!savedUser) {
            throw new Error('Email ou senha incorretos.');
        }

        const isMatch = await bcrypt.compare(user.senha, savedUser.senha);
        if (!isMatch) {
            throw new Error('E-mail ou senha incorretos.');
        }

        const token = createToken(savedUser);
        return { message: 'Usuário autenticado com sucesso.', token };
    }
};

module.exports = userService;
