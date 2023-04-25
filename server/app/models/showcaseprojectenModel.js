const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const showcaseProjecten = sequelize.define('formShowcaseProjecten', {
    // Model attributes are defined here
    onderwerp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});

module.exports = showcaseProjecten;
