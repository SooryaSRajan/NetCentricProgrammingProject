const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextOptionsSchema = new Schema({
    //option of type string
    option: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.models["TextOptions"] || mongoose.model('TextOptions', TextOptionsSchema);