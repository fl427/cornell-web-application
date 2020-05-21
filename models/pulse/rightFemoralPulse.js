const mongoose = require('mongoose');

const rightFemoralPulseSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("RightFemoralPulse", rightFemoralPulseSchema);