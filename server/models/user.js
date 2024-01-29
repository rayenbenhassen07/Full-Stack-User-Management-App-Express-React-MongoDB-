const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    
    name:{
        type : String,
    },
    age:{
        type : Number,
    },
    email:{
        type : String,
    },
    
     
})

const userModel = mongoose.model("rayens",userSchema)
module.exports = userModel