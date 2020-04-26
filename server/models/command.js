const mongoose = require('mongoose');

const commandSchema = mongoose.Schema({
    content: {type: String, required: true},
});

module.exports = mongoose.model("Command", commandSchema);