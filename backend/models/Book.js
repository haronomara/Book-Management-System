import express from 'express';
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    auther:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    availble:{
        type:Boolean,
        
    },
    image:{
        type:String,
        required:true
    }
    

    
})
export default mongoose.model("Book",bookSchema)