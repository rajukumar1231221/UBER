import http from 'http';
import connectToDb from './db/db.js';
import app from './app.js';
const port  =  process.env.PORT || 5000;



const server = http.createServer(app);


app.listen(port, ()=>{
    
    console.log(`server running on port http://localhost:${port}`);
    connectToDb()
});
