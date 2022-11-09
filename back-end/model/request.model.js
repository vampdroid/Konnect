const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    },
    status:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("request", requestSchema);
