import { Schema} from 'mongoose'
export const userSchema = new Schema({
    email: {
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    },
    victories:{
        type:Number,
        required:false
    },
    defeats:{
        type:Number,
        required:false
    },
    draws:{
        type:Number,
        required:false
    },
    total_games:{
        type:Number,
        required:false
    },
    status:{
        type:String,
        required:true
    },   
    socket_id:{
        type:String,
        required:false
    },
    },
    {
        versionKey:false
    })