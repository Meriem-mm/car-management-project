const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const servicesRoutes = require('./routes/services');
const carsRoutes = require('./routes/cars');
const requestsRoutes = require('./routes/requests');
const cors = require('cors');

// Създаване на express приложение
const app = express();

// Настройка за CORS (ако frontend е на различен домейн)
app.use(cors());

// Парсване на JSON заявки
app.use(bodyParser.json());

// Свързване с MongoDB
mongoose.connect('mongodb://localhost:27017/car-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log('Error connecting to MongoDB:', err);
});

// Рутери за API
app.use('/api/services', servicesRoutes);
app.use('/api/cars', carsRoutes);
app.use('/api/requests', requestsRoutes);

// Стартиране на сървъра
const PORT = 8088;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
