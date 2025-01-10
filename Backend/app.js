import  'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import router from './services/routes/user.routes.js';
const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); 

app.get('/',(req,res)=>{
    res.send('hello world');
});
app.use('/users',router)

export default app;