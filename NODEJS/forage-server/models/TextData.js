const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TextDataSchema = new Schema({
    type: {
        type: String,
        default: "text"
    },
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    status: {
        type: String,
    },
})

module.exports = mongoose.models["TextData"] || mongoose.model('TextData', TextDataSchema);
