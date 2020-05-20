const mongoose = require('mongoose');

const simulatedVocalizationSchema = mongoose.Schema({
    part1: {type: String, required: true},
    part2: {type: Number, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("SimulatedVocalization", simulatedVocalizationSchema);