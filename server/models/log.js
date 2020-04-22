const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createDate: {type: Date, default: Date.now()},
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model("Log", logSchema);