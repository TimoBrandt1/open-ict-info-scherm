const mysql = require('mysql');
const config = require('../../config/index');

const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connected');
    }
}
);

module.exports = connection;