const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize } = require('./utils/db');
const kennisdelingRoutes = require('./routes/kennisdelingRoutes');
const userRoutes = require('./routes/userRoutes');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/kennisdeling', kennisdelingRoutes);
app.use('/user', userRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});