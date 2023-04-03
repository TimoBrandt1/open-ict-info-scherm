const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const formKennisdeling = sequelize.define('formKennisdeling', {
    // Model attributes are defined here
    onderwerp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    spreker: {
        type: DataTypes.STRING,
        allowNull: false
    },
    locatie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tijd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datum: {
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
