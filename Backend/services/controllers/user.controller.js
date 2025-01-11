import cookieParser from "cookie-parser";
import userModel from "../models/user.model.js";
import createUser from "../ModelSevices/user.service.js";
import {validationResult} from 'express-validator';
import blacklistTokenModel from "../models/blacklistToken.model.js";

 export const registerUser = async(req,res,next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullName,email,password} = req.body;


    const isUserAlreadyexist = await  userModel.findOne({email});
    if(isUserAlreadyexist){
        return res.status(400).json({message:'User already exist'});
    }
    const hashedPassword = await userModel.hashPassword(password);

    const user = await createUser({
        firstName:fullName.firstName,
        lastName:fullName.lastName,
        email,
        password:hashedPassword
    });


    const token = user.generateAuthToken();
    res.status(201).json({token,user})
}

export const loginUser =  async(req,res,next)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
    
        }
    
        const {email,password}= req.body;
    const userLogin = await userModel.findOne({email}).select('+password');
    if(!userLogin){
        return res.status(401).json({message:'invalid email or password'});
    }
        const isMatch = await userLogin.comparePassword(password);

        if(!isMatch){
            return res.status(401).json({message:'invalid email or password'});
        }

        const token = userLogin.generateAuthToken();

        res.cookie("token",token);
        res.status(200).json({message:"sucessfully login",token,userLogin,});
    
    } catch (e) {
        throw new Error("login server error");
        
    }

}


export const getUserProfile =async (req,res,next)=>{
    res.status(200).json(req.user)
}

export const logoutUser = async(req,res,next)=>{
  try {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({token});

    
    res.status(200).json({message:'Logged out successfully'});
  } catch (e) {
    next(e);
  }
}

