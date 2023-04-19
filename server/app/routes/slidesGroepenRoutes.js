// Import controller
const slidesGroepen = require('../controllers/slidesGroepenController');
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

// Get all slidesGroepen
router.get('/', slidesGroepen.getAll);
// Get slidesGroepen by id
router.get('/:id', slidesGroepen.getById);

// Routes under here need authentication in the future

// Delete slidesGroepen by id
router.delete('/:id', slidesGroepen.deleteById);
// Create slidesGroepen
router.post('/', slidesGroepen.create);
// Update slidesGroepen by id
router.put('/:id', slidesGroepen.putById);

module.exports = router;
