import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name : {
        type : String , 
        required : [true , "Name is required"],
    },
    certificateID : {
        type : String 
    },
    certificateLink : {
        type : String , 
        default  : "https://drive.google.com/u/0/drive-viewer/AKGpihYy7AVvAx_A9VLVF9rWaESYAvvqRu1_m4siLmPkAkCuFUMbPFn7bvniKYDcCza7mDz2oFVkQ6RgEeMzPc-AdfpFskpguwGjTNw=s1600-rw-v1"
    }
} , {timestamps : true})


const User = mongoose.model("User" , UserSchema)
export default User