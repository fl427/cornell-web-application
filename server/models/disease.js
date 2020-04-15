const mongoose = require('mongoose');

const diseaseSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
    creator: {type: String}
}, {
    timestamps: true,
});

const Disease = mongoose.model("Disease", diseaseSchema)
  
module.exports = Disease;