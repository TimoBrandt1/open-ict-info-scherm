const connection = require('../utils/db');
const { Buffer } = require('buffer');

// controller voor showcase projecten formulieren
const showcaseProjectenController = {
    // get all showcase projecten
    getAll: (req, res) => {
        connection.query(
            'SELECT * FROM `formShowcaseProjecten`',
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
    // get showcase projecten by id
    getById: (req, res) => {
        connection.query(
            'SELECT * FROM `formShowcaseProjecten` WHERE `id` = ?',
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
    // delete showcase projecten by id
    deleteById: (req, res) => {
        connection.query(
            'DELETE FROM `formShowcaseProjecten` WHERE `id` = ?',
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
    // create showcase projecten
    create: (req, res) => {
        connection.query(
            'INSERT INTO `formShowcaseProjecten` (`onderwerp`, `details`, `image`) VALUES (?, ?, ?)',
            [req.body.onderwerp, req.body.details, Buffer.from(req.body.image.buffer, 'base64')],
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
    // update showcase projecten by id
    putById: (req, res) => {
        connection.query(
            'UPDATE `formShowcaseProjecten` SET `onderwerp` = ?, `details` = ?, `image` = ? WHERE `id` = ?',
            [req.body.onderwerp, req.body.details, Buffer.from(req.body.image.buffer, 'base64'), req.params.id],
            (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);
                    res.send(results);
                }
            }
        );
    }
};

module.exports = showcaseProjectenController;