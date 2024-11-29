const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // "Bearer TOKEN"
    if (!token) return res.status(401).json({ message: 'Token não fornecido' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adiciona informações do usuário autenticado
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }
};