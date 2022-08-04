const mongoose = require("mongoose")
const quotes = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

mongoose.model("Quotes",quotes)
