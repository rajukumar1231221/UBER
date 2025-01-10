import mongoose from 'mongoose';

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createedAt:{
        type:Date,
        default:Date.now,
        expires:86400
    }
});
 const blacklistModel = mongoose.model('BlacklistToken',blacklistTokenSchema);
export default  blacklistModel;