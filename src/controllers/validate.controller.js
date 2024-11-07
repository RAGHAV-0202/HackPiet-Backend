import mongoose from "mongoose";
import User from "../model/user.model.js";

const validate = async(req,res)=>{
    try{
        const {name , certificateNumber} = req.body
        // console.log({name , certificateNumber})

        if(!name.trim() || !certificateNumber.trim()){
            res.status(400).json("enter both name and certificate number")
        }

        const user = await User.findOne({Name : name})

        if(!user){
            res.status(400).json("No Member found")
        }

        if(user?.certificateID != certificateNumber){
            res.status(400).json("Invalid Certificate Number")
        }else{
            res.status(200).json("Certificate is Valid")
        }

        

    }catch(error){
        console.log("error while validation")
        console.log(error)
    }
}

const upload = async(req,res)=>{
    try{
        const {name , certificateNumber} = req.body
        // console.log({name , certificateNumber})

        if(typeof name !== "string" || typeof certificateNumber !== "string" || !name.trim() || !certificateNumber.trim()){
            res.status(400).json("enter both name and certificate number")
        }

        const user = await User.create({Name : name , certificateID : certificateNumber})
        
        res.status(200).json(
                 `${name} with certificate id ${certificateNumber} added to the Data base , with id ${user._id}`                  
             )

    }catch(error){
        console.log("error while adding certificate")
        res.status(500).json("couldnt upload")
    }
}

export {validate , upload}

