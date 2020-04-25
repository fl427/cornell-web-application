const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: { type: String },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model("Dog", dogSchema);