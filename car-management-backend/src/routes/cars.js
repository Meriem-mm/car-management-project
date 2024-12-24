const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

// Създаване на автомобил
router.post('/', carsController.createCar);

// Актуализиране на автомобил
router.put('/:id', carsController.updateCar);

// Изтриване на автомобил
router.delete('/:id', carsController.deleteCar);

// Извличане на всички автомобили
router.get('/', carsController.getAllCars);

module.exports = router;
