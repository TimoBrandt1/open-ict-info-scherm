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

// ALl routes under here need verifyToken in thefutere
// Delete kennisdeling by id
router.delete('/:id', kennisdelingController.deleteById);
// Create kennisdeling
router.post('/', kennisdelingController.create);
// Update kennisdeling by id
router.put('/:id', kennisdelingController.putById);

module.exports = router;