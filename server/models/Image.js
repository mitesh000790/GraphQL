const mongoose = require("mongoose")
const image = new mongoose.Schema({
    image:{
        type:Buffer,
        required:true
    },
    by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

mongoose.model("Image",image)
