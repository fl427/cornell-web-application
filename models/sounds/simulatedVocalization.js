const mongoose = require('mongoose');

const simulatedVocalizationSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("SimulatedVocalization", simulatedVocalizationSchema);