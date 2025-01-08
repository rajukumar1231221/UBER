import userModel from "../models/user.model.js";

const createUser = async({
    firstName,lastName,email,password
})=>{
    if (!firstName || !email || !password){
        throw new Error('All fields are required');
    };


    const existingUser = await userModel.findOne({email});
    if(existingUser){
        throw new Error("Email is already in use");
        
    }
    // try catch hatana hai
  try {
    const user = userModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,
        password
    });

    return user;

  } catch (e) {
    console.error("Error creating user:",e)
    throw new Error("Error creating user");
    
  }
}

export default createUser;