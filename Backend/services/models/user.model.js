import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            requied:true,
            minlength:[3,'First name must be at least 3 characters logs'],

        },
        lastName:{
            type:String,
            minlength:[3,'Last name must be at least 3 characters logs'],
            
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email name must be at least 5 characters logs'],

    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    soketId:{
        type:String
    }
});


userSchema.methods.generateAuthToken  = function(){
    const token = jwt.sign({_id: this.id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
    
}
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}


const userModel = mongoose.model('user',userSchema);

export default userModel;