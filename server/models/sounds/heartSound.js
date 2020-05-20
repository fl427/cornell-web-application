const mongoose = require('mongoose');

const heartSoundSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("HeartSound", heartSoundSchema);