const Request = require('../models/requestModel');

// Create a new maintenance request
exports.createRequest = async (req, res) => {
    try {
        const request = new Request(req.body);
        await request.save();
        res.status(201).json(request);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all requests
exports.getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a request
exports.updateRequest = async (req, res) => {
    try {
        const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!request) return res.status(404).json({ message: "Request not found" });
        res.status(200).json(request);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a request
exports.deleteRequest = async (req, res) => {
    try {
        const request = await Request.findByIdAndDelete(req.params.id);
        if (!request) return res.status(404).json({ message: "Request not found" });
        res.status(200).json({ message: "Request deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
