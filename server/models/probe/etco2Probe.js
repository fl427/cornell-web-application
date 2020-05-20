const mongoose = require('mongoose');

const etco2ProbeSchema = mongoose.Schema({
    content: {type: Boolean, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("Etco2Probe", etco2ProbeSchema);