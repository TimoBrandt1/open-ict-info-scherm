// Import controller
const kennisdelingController = require('../controllers/kennisdelingController');
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

// Get all kennisdeling
router.get('/', kennisdelingController.getAll);
// Get kennisdeling by id
router.get('/:id', kennisdelingController.getById);
// Delete kennisdeling by id
router.delete('/:id', verifyToken, kennisdelingController.deleteById);
// Create kennisdeling
router.post('/', verifyToken, kennisdelingController.create);
// Update kennisdeling by id
router.put('/:id', verifyToken, kennisdelingController.updateById);

module.exports = router;