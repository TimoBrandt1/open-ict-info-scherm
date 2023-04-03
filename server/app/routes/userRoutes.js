// import controller
const userController = require('../controllers/userController');
// Auth
const verifyToken = require('../utils/auth').verifyToken;
// Import express
const express = require('express');
// Import router
const router = express.Router();
// Import body-parser
const bodyParser = require('body-parser');
// Import cors
const cors = require('cors');

// Use body-parser
router.use(bodyParser.json());
// Use cors
router.use(cors());

// Get all users
router.getAll('/', userController.getAll);
// Get user by id
router.getById('/:id', userController.getById);
// Delete user by id
// router.deleteById('/:id', verifyToken, userController.deleteById);
// Create user
router.create('/', userController.create);
// Update user by id
// router.updateById('/:id', verifyToken, userController.updateById);
router.login('/', userController.login);
// get user by token
router.getByToken('/', verifyToken, userController.getByToken);

module.exports = router;
