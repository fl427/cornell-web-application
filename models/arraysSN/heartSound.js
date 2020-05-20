const mongoose = require('mongoose');

const heartSoundSchema = mongoose.Schema({
    part1: {type: String, required: true},
    part2: {type: Number, required: true}
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("HeartSound", heartSoundSchema);