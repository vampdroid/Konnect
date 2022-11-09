const mongoose = require('mongoose')

const requestDetailSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    },
    request_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'request'
    },
})

module.exports = mongoose.model("request_detail", requestDetailSchema);
