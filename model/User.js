import mongoose from "mongoose";
import validator  from "validator";

const UserModel = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true , "Please Enter Your First Name"],
    },
    lastName: {
        type: String,
        required: [true , "Please Enter Your Last Name"]
    },
    email: {
        type: String,
        required: [true , "Please Enter You Email"],
        validate: validator.isEmail,
        unique: true
    },
    phoneNo: {
        type:Number,
        unique: true,
        required: [true , "Please Enter Your Phone Number"],
        // maxlength: [10 , "Phone Number Should be 10 digit"],
        // minlength: [6 , "Password must be 6 characters"],
        minlength: [6 , "Phone Number Should be 10 digit"],
        maxlength: [10 , "Phone Number Should be 10 digit"],
    },
    location: {
        type: String,
        required: [true , "Please Enter Your Location"],
    },
    hobby:{
        type: String,
    }

})

export const User = new mongoose.model("User" , UserModel)