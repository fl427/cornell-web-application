const mongoose = require('mongoose');

const nibpSchema = mongoose.Schema({
    target: {type: Number, required: true},
    duration: {type: Number, required: true},
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("Nibp", nibpSchema);