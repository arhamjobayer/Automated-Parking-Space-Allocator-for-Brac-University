import express from 'express';
 import bodyParser from 'body-parser';
 import userRoutes from './routes/users.js'
 import vehicleRoutes from './routes/vehicle.js'
 import ParkRoutes from './routes/Parking.js'
 import mongoose from 'mongoose';
 import dotenv from 'dotenv'
 import cors from 'cors'
 dotenv.config()
 const app=express();
 const PORT=5000;



 app.use(cors());
 app.use(bodyParser.json());
 app.use('/users',userRoutes)
 app.use('/vehicle',vehicleRoutes)
 app.use('/parking',ParkRoutes)
 app.use('/',(req,res)=> res.set('Access-Control-Allow-Origin', 'http://localhost:3000'));
 app.get('/',(req,res)=> res.send('hello from the other side'));

mongoose.connect(process.env.DB_URI,(res)=>{
    console.log(res)
console.log('connected to db')
})

 app.listen(PORT ,()=> console.log("app started successflle"))