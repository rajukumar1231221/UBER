import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.DB;


if(!uri){
throw new Error("invalid string");
}
   const connectToDb = async()=>{
    try {
        const conn = await mongoose.connect(uri);
        if(!conn)
            return console.log('connection error');

        console.log('connected to DB');
        
    } catch (e){
        console.log(e);
    }
   }



export default connectToDb;
