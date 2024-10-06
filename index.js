import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/userRouter.js';
import cors from 'cors'; 

const app = express();


app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/api/v1/user', userRouter); 



// MongoDB Connection
const mongoURI = 'mongodb+srv://tharindu:tharindu@cluster0.yevxg.mongodb.net/'; 

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
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
