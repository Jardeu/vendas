const { decodeToken } = require('../utils/jwt');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Não Autorizado' });
    }

    try {
        const decoded = decodeToken(token.split(' ')[1]);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = verifyToken;
