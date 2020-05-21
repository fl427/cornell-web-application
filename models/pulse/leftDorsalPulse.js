const mongoose = require('mongoose');

const leftDorsalPulseSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("LeftDorsalPulse", leftDorsalPulseSchema);