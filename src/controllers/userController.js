const userService = require('../services/userService');

const userController = {
    //Registrar um novo usuário
    register: (req, res) => {
        const newUser = req.body;
        userService.create(newUser, (err, message) => {
            if (err) {
                res.status(400).json({ message: err.message });
            } else {
                res.status(201).json({ message: message });
            }
        });
    },

    //Fazer login
    login: (req, res) => {
        userService.login((err, token) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.status(200).json(token);
            }
        });
    },
};

module.exports = userController;
