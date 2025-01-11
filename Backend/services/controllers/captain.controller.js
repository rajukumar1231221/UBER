import { validationResult } from "express-validator";
import captainModel from "../models/captain.model.js";
import createCaptain from "../ModelSevices/captain.service.js";
import cookieParser from "cookie-parser";
import blacklistModel from "../models/blacklistToken.model.js";
export const registerCaptain = async (req, res, next) => {

      try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "field error", errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({

        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = captain.genrateAuteToken();
    res.status(201).json({ message: "captain created successfully", token, captain })
      } catch (e) {
        res.status(500).json({error:'Failed to create captain'})
      }
}


export const loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}= req.body;

    const captain = await captainModel.findOne({email}).select('+password');
    
    if(!captain){
        return res.status(401).json({message:'Invalid email or password'});

    }

  
    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token = captain.genrateAuteToken();
    res.cookie('token',token);
    res.status(200).json({message:"logged in successfully",token,captain})
    
}


export const getCaptainProfile = async(req,res,next)=>{
    res.status(200).json({captain:req.captain});
} 

export const logoutCaptain = async(req,res,next)=>{

    const token = req.cookies.token || req.headers.authorization?.spit('')[1];

    await blacklistModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message:'Logout successfully'});
} 