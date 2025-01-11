import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const captainSchema = new mongoose.Schema({
    fullName:{
        firstName:{
           type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters long'],
        },
        lastName:{
            type:String,
            minlength:[3,'Last name must be at least 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+$/,'Please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate must be at least 3 characters long'],
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,'Capacity must be at least 1 characters long'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
        }
    },
    location:{
        lat:{
            type:Number,
        },
        long:{
            type:Number,
        }
    }
   
})


captainSchema.methods.genrateAuteToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);

export default captainModel;
