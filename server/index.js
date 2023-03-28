// server.js
const express = require('express');
const mysql2 = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'OpenScherm',
    database: 'openictscherm'
});


app.get('/test', (req, res) => {
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
});


app.post('/formKennisdeling', (req, res) => {
    // get biggest existing id
    connection.query(
        'SELECT MAX(id) FROM `formKennisdeling`',
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                const newId = results[0]['MAX(id)'] + 1;
            }
        }
    )

    // insert new row
    connection.query(
        'INSERT INTO `form` (`id`, `onderwerp`, `spreker`, `locatie`, `tijd`, `datum`, `details`) values (?,?,?,?,?,?,?)',
        [newId, req.body.onderwerp, req.body.spreker, req.body.locatie, req.body.tijd, req.body.datum, req.body.details],
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

app.get('/formKennisdeling/:id', (req, res) => {
    connection.query(
        'SELECT * FROM `formKennisdeling` WHERE `id` = ?',
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
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));