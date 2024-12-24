const Service = require('../models/Service');

// Създаване на сервиз
exports.createService = async (req, res) => {
    try {
        const { name, city, capacity } = req.body;
        const service = new Service({ name, city, capacity });
        await service.save();
        res.status(200).send(service);
    } catch (error) {
        res.status(400).send({ message: 'Invalid data' });
    }
};

// Актуализиране на сервиз
exports.updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!service) {
            return res.status(404).send({ message: 'Service not found' });
        }
        res.status(200).send(service);
    } catch (error) {
        res.status(400).send({ message: 'Invalid data' });
    }
};

// Изтриване на сервиз
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).send({ message: 'Service not found' });
        }
        res.status(200).send({ message: 'Service deleted' });
    } catch (error) {
        res.status(400).send({ message: 'Invalid data' });
    }
};

// Получаване на всички сервизи
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).send(services);
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch services' });
    }
};

// Получаване на конкретен сервиз
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).send({ message: 'Service not found' });
        }
        res.status(200).send(service);
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch service' });
    }
};
