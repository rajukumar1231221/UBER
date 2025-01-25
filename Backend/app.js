import  'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import userRouter from './services/routes/user.routes.js';
import captainRouter from './services/routes/captain.routes.js';
const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); 

app.get('/',(req,res)=>{
    res.send('hello world');
});
app.use('/users',userRouter);
app.use('/captains',captainRouter);;
export default app;