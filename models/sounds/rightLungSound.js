const mongoose = require('mongoose');

const rightLungSoundSchema = mongoose.Schema({
    content: [{type: Number}]
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("RightLungSound", rightLungSoundSchema);