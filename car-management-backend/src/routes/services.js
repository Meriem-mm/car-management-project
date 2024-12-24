const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

// Създаване на сервиз
router.post('/', servicesController.createService);

// Актуализиране на сервиз
router.put('/:id', servicesController.updateService);

// Изтриване на сервиз
router.delete('/:id', servicesController.deleteService);

// Извличане на всички сервизи
router.get('/', servicesController.getAllServices);

// Извличане на конкретен сервиз
router.get('/:id', servicesController.getServiceById);

module.exports = router;
