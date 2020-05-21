const mongoose = require('mongoose');

const spo2ProbeSchema = mongoose.Schema({
    content: {type: Boolean, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("Spo2Probe", spo2ProbeSchema);