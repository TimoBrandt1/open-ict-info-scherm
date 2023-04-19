const connection = require('../utils/db');

// controller voor slidesGroepen formulieren
const slidesGroepenController = {
    // get all slidesGroepen
    getAll: (req, res) => {
        connection.query(
            'SELECT * FROM `slidesGroepen`',
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
    // get slidesGroepen by id
    getById: (req, res) => {
        connection.query(
            'SELECT * FROM `slidesGroepen` WHERE `id` = ?',
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
    // delete slidesGroep by id
    deleteById: (req, res) => {
        connection.query(
            'DELETE FROM `slidesGroepen` WHERE `id` = ?',
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
    // data in groep zetten (dus groep aanmaken), zorg ervoor dat je dus de slideIDs toevoegd met comma's ertussen. Dus 23,35,56,78 etc.
    create: (req, res) => {
        connection.query(
            'INSERT INTO `slidesGroepen` (`naam`, `slidesID`, `datum`, `tijd`, `details`) VALUES (?, ?, ?, ?, ?)',
            [req.body.naam, req.body.slidesID, req.body.datum, req.body.tijd, req.body.details],
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
    // update groep by id
    putById: (req, res) => {
        connection.query(
            'UPDATE `slidesGroepen` SET `naam` = ?, `slidesID` = ?, `datum` = ?, `tijd` = ?, `details` = ? WHERE `id` = ?',
            [req.body.naam, req.body.slidesID, req.body.datum, req.body.tijd, req.body.details, req.params.id],
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

module.exports = slidesGroepenController;
