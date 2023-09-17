import { User } from "../model/User.js"

export const register = async (req,res)=>{
    const {firstName , lastName , email , phoneNo , location , hobby} = req.body
    try {
        let userAdded = await User.create({
            firstName , lastName , email , phoneNo , location , hobby
        })   

        res.status(200).json({message: "User Added SuccessFully" , userAdded})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const showUser = async (req,res)=>{
    try {
    const showdata = await User.find()
    res.status(201).json({message: "All users" , showdata})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const singleUser = async (req,res)=>{
    try {
        const singleUser = await User.findById({_id: req.params.id})
        res.status(201).json({message: "Single User" , singleUser})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const editUser = async(req,res)=>{

    try {

        let editUser = await User.findByIdAndUpdate(req.params.id , req.body , {new:true})
        res.status(200).json({message: "User Edit SuccessFully" , editUser})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export const deleteUser = async(req,res)=>{
    try {
        let deleteUser = await User.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({message: "User Deleted SuccessFully" , deleteUser})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}