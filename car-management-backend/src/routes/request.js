const express = require('express');
const router = express.Router();
const requestsController = require('../controllers/requestsController');

// Създаване на заявка
router.post('/', requestsController.createRequest);

// Извличане на заявки с филтри
router.get('/', requestsController.getRequests);

module.exports = router;
