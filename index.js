import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/userRouter.js';
import productRouter from './Routes/productRoute.js';
import orderRouter from './Routes/orderRoute.js'
import customerRouter from './Routes/customerRoute.js'
import cors from 'cors'; 
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/api/v1/user', userRouter); 
app.use('/api/v1/product', productRouter)
app.use('/api/v1/customer', customerRouter)
app.use('/api/v1/order', orderRouter)



// MongoDB Connection
const mongoURI = 'mongodb+srv://tharindu:tharindu@cluster0.yevxg.mongodb.net/'; 

mongoose.connect(mongoURI, {
  
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
