const mongoose = require('mongoose');

const tempProbeSchema = mongoose.Schema({
    content: {type: Boolean, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("TempProbe", tempProbeSchema);