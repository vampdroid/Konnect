const mongoose = require('mongoose')

const interestSchema = new mongoose.Schema({
    interest_title:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    interest_description:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
})

module.exports = mongoose.model("interest", interestSchema);