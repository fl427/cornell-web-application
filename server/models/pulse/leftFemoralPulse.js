const mongoose = require('mongoose');

const leftFemoralPulseSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("LeftFemoralPulse", leftFemoralPulse);