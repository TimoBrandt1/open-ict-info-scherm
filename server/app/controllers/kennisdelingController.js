const connection = require('../utils/db');

// controller voor kennisdeling formulieren
const kennisdelingController = {
    // get all kennisdeling
    getAll: (req, res) => {
        connection.query(
            'SELECT * FROM `formkennisdeling`',
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
    // get kennisdeling by id
    getById: (req, res) => {
        connection.query(
            'SELECT * FROM `formkennisdeling` WHERE `id` = ?',
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
    // delete kennisdeling by id
    deleteById: (req, res) => {
        connection.query(
            'DELETE FROM `formkennisdeling` WHERE `id` = ?',
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
    // create kennisdeling
    create: (req, res) => {
        connection.query(
            'INSERT INTO `formkennisdeling` (`onderwerp`, `spreker`, `locatie`, `tijd`, `datum`, `details`) VALUES (?, ?, ?, ?, ?, ?)',
            [req.body.onderwerp, req.body.spreker, req.body.locatie, req.body.tijd, req.body.datum, req.body.details],
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
    // update kennisdeling by id
    putById: (req, res) => {
        connection.query(
            'UPDATE `formkennisdeling` SET `onderwerp` = ?, `spreker` = ?, `locatie` = ?, `tijd` = ?, `datum` = ?, `details` = ? WHERE `id` = ?',
            [req.body.onderwerp, req.body.spreker, req.body.locatie, req.body.tijd, req.body.datum, req.body.details, req.params.id],
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

module.exports = kennisdelingController;
