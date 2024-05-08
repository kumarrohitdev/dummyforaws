import mongoose from "mongoose";

const DummySchema=new mongoose.Schema({
    Name:{
        type:String
    },
    Password:{
        type:String
    }
})


export const user=mongoose.model("userdata",DummySchema);

