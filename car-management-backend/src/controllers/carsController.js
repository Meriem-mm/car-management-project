
const Car = require('../models/Car');

// Създаване на автомобил
exports.createCar = async (req, res) => {
    try {
        const { model, year, services } = req.body;
        const car = new Car({ model, year, services });
        await car.save();
        res.status(200).send(car);
    } catch (error) {
        res.status(400).send({ message: 'Invalid data' });
    }
};

// Актуализиране на автомобил
exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }
        res.status(200).send(car);
    } catch (error) {
        res.status(400).send({ message: 'Invalid data' });
    }
};

// Изтриване на автомобил
exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }
        res.status(200).send({ message: 'Car deleted' });
    } catch (error) {
        res.status(400).send({ message: 'Invalid data' });
    }
};

// Получаване на всички автомобили с филтри
exports.getAllCars = async (req, res) => {
    const { brand, serviceId, yearRange } = req.query;

    const filters = {};

    if (brand) {
        filters.model = new RegExp(brand, 'i');
    }

    if (serviceId) {
        filters.services = serviceId;
    }

    if (yearRange) {
        const [startYear, endYear] = yearRange.split('-').map(Number);
        filters.year = { $gte: startYear, $lte: endYear };
    }

    try {
        const cars = await Car.find(filters);
        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch cars' });
    }
};
