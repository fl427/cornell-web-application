const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    log: {type: String, required: true},
    createDate: {type: Date, default: Date.now()},
    // creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User'} // Log should be creator by the robot dog
});

module.exports = mongoose.model("Log", logSchema);