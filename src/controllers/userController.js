const userService = require('../services/userService');

const userController = {
    //Registrar um novo usuário
    register: async (req, res) => {
        try {
            const newUser = req.body;

            if (!newUser.email || !newUser.senha) {
                res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
            }

            const user = await userService.register(newUser);
            res.status(201).json({ message: 'Usuário criado com sucesso.', user });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    //Fazer login
    login: async (req, res) => {
        try {
            const user = req.body;

            if (!user.email || !user.senha) {
                res.status(401).json({ message: 'Email ou senha incorretos.' });
            }

            const result = await userService.login(user);
            res.status(200).json(result);
        } catch (err) {
            if (err.message === 'E-mail ou senha incorretos.') {
                res.status(401).json({ message: err.message });
            } else {
                res.status(500).json({ message: 'Erro ao fazer login.' });
            }
        }
    },
};

module.exports = userController;
