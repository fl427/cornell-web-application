const mongoose = require('mongoose');

const ecgProbeSchema = mongoose.Schema({
    content: {type: Boolean, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("EcgProbe", ecgProbeSchema);