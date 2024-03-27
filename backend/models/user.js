import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
})


export default mongoose.model('user', userSchema)