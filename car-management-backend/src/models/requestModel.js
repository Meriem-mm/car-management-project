const mongoose = require('mongoose');

const maintenanceRequestSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: String, required: true }
});

module.exports = mongoose.model('Request', requestSchema);
