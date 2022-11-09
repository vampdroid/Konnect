const mongoose = require('mongoose')

const userInterestSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    },
    interest_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'interest'
    },
})

module.exports = mongoose.model("user_interest", userInterestSchema);
