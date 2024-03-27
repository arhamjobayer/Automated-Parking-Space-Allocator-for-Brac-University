import mongoose from "mongoose";

const plateSchema=mongoose.Schema({
    PlateNum:{type:String,required:true},
    Slot:Number,
    Entry:Date,
    Exit:Date,
    fare:Number
})


export default mongoose.model('vehicle', plateSchema)