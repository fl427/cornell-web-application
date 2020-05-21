const mongoose = require('mongoose');

const logCommentSchema = mongoose.Schema({
    content: { type: String, required: true },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model("Logcomment", logCommentSchema);