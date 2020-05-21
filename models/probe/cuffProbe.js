const mongoose = require('mongoose');

const cuffProbeSchema = mongoose.Schema({
    content: {type: Boolean, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("CuffProbe", cuffProbeSchema);