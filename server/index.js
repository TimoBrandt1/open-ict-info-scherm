// server.js
const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

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
    // insert new row
    connection.query(
        'INSERT INTO `formKennisdeling` (`onderwerp`, `spreker`, `locatie`, `tijd`, `datum`, `details`) values (?,?,?,?,?,?)',
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


app.get('/formkennisdeling', (req, res) => {
    connection.query( // get everything where id is lower or equal to the given id
        'SELECT * FROM `formKennisdeling` WHERE `id` <= ?',
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



app.delete('/deleteScreen/:id', (req, res) => {
    connection.query(
        'DELETE FROM `formKennisdeling` WHERE `id` = ?',
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