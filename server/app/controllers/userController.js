const auth = require('../utils/auth');
const connection = require('../utils/db');

// controller for user
const userController = {
    // get all users
    getAll: (req, res) => {
        connection.query(
            'SELECT * FROM `users`',
            (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);
                    res.send(results);
                }
            }
        );
    },
    // get user by id
    getById: (req, res) => {
        connection.query(
            'SELECT * FROM `users` WHERE `id` = ?',
            [req.params.id],
            (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);
                    res.send(results);
                }
            }
        );
    },
    // delete user by id
    deleteById: (req, res) => {
        connection.query(
            'DELETE FROM `users` WHERE `id` = ?',
            [req.params.id],
            (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);
                    res.send(results);
                }
            }
        );
    },
    // create user
    create: (req, res) => {
        connection.query(
            'INSERT INTO `users` (`username`, `password`, `email`, `role`) VALUES (?, ?, ?, ?)',
            [req.body.username, req.body.password, req.body.email, req.body.role],
            (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);
                    res.send(results);
                }
            }
        );
    },
    // update user by id
    updateById: (req, res) => {
        connection.query(
            'UPDATE `users` SET `username` = ?, `password` = ?, `email` = ?, `role` = ? WHERE `id` = ?',
            [req.body.username, req.body.password, req.body.email, req.body.role, req.params.id],
            (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);
                    res.send(results);
                }
            }
        );
    },
    // login user
    login: (req, res) => {
        connection.query(
            'SELECT * FROM `users` WHERE `username` = ? AND `password` = ?',
            [req.body.username, req.body.password],
            (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);
                    if (results.length > 0) {
                        const token = auth.generateToken(results[0]);
                        res.send(token);
                    } else {
                        res.send('Invalid username or password');
                    }
                }
            }
        );
    },
    // get user by token
    getByToken: (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const user = auth.verifyToken(token);
        if (user) {
            connection.query(
                'SELECT * FROM `users` WHERE `id` = ?',
                [user.id],
                (err, results) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(results);
                        res.send(results);
                    }
                }
            );
        } else {
            res.send('Invalid token');
        }
    }
};

module.exports = userController;