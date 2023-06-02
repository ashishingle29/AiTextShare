const mongoose = require('mongoose')

const iplSchema = new mongoose.Schema(
    {
        url: String
    }, { timestamps: true })
    
module.exports = mongoose.model('IPL', iplSchema);