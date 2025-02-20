const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required :['true',"Name is Required"],
        trim : true,
        maxLength : [10, "Name must be less than 10 chars"],
    },
    email : {
        type : String,
        required : ['true',"Email is required"],
        unique : true,
    },
    age : {
        type : Number,
    }
});


module.exports = mongoose.model("User",userSchema);