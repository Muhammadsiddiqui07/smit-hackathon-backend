import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required : true,
        unique : true,
    },
    LastName: {
        type: String,
        required : true,
        unique : true,
    },
    Email: {
        type: String,
        required : true,
        unique : true,
    },
    Password: {
        type: String,
        required : true,
        unique : true,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const User = mongoose.model("users" , userSchema)

export default User;