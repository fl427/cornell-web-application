const mongoose = require('mongoose');

const chestMovementSchema = mongoose.Schema({
    content: {type: Boolean, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("ChestMovement", chestMovementSchema);