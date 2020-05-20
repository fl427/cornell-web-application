const mongoose = require('mongoose');

const rightDorsalPulseSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("RightDorsalPulse", rightDorsalPulseSchema);