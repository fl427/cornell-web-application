var mongoose = require('mongoose');

var logSchema = mongoose.Schema({
    content: String,
    auther: String,
    created: {type: Date, default: Date.now}
});


module.exports = mongoose.model("Log", logSchema);