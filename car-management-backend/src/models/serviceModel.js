const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request'}]
});

module.exports = mongoose.model('Service', serviceSchema);
