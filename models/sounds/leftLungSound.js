const mongoose = require('mongoose');

const leftLungSoundSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("LeftLungSound", leftLungSoundSchema);