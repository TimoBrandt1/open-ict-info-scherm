const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const token = jwt.sigh({
        id: user.id,
        email: user.email,
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
        });
    return token;
}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('No token provided');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).send('No token provided');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = { id: decoded.id, email: decoded.email };
        next();
    } catch (error) {
        return res.status(401).send('Unauthorized');
    }
}

module.exports = {
    generateToken,
    verifyToken
}