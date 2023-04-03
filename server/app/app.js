const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize } = require('./utils/db');
const kennisdelingController = require('./controllers/kennisdelingController');
const userController = require('./controllers/userController');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/kennisdeling', kennisdelingController);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});