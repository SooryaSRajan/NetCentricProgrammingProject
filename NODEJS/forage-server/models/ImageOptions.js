const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageOptionsSchema = new Schema({
    //option of type string
    option: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.models["ImageOptions"] || mongoose.model('ImageOptions', ImageOptionsSchema);