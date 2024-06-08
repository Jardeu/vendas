const userService = require('../services/userService');

const userController = {
    //Registrar um novo usuário
    register: async (req, res) => {
        try {
            const newUser = req.body;
            const result = await userService.createUser(newUser);
            res.status(201).json(result);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    },


};

module.exports = userController;
