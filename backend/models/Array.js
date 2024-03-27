import mongoose from "mongoose";

const arraySchema=mongoose.Schema({
    SLOT:String
})


export default mongoose.model('array', arraySchema)