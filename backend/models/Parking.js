import mongoose from "mongoose";

const parkingSchema=mongoose.Schema({
    PlateNum:{type:String,required:true},
    slot:Number
})


export default mongoose.model('park', parkingSchema)