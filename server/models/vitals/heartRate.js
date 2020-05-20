const mongoose = require('mongoose');

const heartRateSchema = mongoose.Schema({
    target: {type: Number, required: true},
    duration: {type: Number, required: true},
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("HeartRate", heartRateSchema);