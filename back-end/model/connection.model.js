const mongoose = require('mongoose')

const connectionSchema = new mongoose.Schema({
    user1:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    },
    user2:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    },
    status:{
        type:String,
        required:true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("connection", connectionSchema);
