// import controller
const showcaseProjectenController = require('../controllers/showcaseprojectenController');
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

router.get('/', showcaseProjectenController.getAll);
// Get showcase projecten by id
router.get('/:id', showcaseProjectenController.getById);

// all routes below need verifyToken in the future
// Delete showcase projecten by id
router.delete('/:id', showcaseProjectenController.deleteById);
// Create showcase projecten
router.post('/', showcaseProjectenController.create);
// Update showcase projecten by id
router.put('/:id', showcaseProjectenController.putById);

module.exports = router;