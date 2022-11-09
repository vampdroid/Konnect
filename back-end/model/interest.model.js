const mongoose = require('mongoose')

const interestSchema = new mongoose.Schema({
    interest_title:{
        type: String,
        required: true,
    },
    interest_description:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("interest", interestSchema);