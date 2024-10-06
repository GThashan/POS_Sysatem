import bcrypt from 'bcrypt';
import User from '../Models/userSchema.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { fullname, email, password, activeState } = req.body;

        // Check if all fields are provided
        if (!fullname || !email || !password || activeState === undefined) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({
            fullname,
            email,
            password: hashPassword,
            activeState
        });

       
      

        // Setup nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "testnodmailer123@gmail.com",
                pass: "dzaf uygd ksvx oygc" 
            }
        });

        // Mail options
        const mailOption = {
            from: "testnodmailer123@gmail.com",
            to: email, // Email from the request body
            subject: "New Account Created",
            text: "Your POS system account has been created successfully."
        };

        // Send the email
        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Sending email failed",
                    error: error.message
                });
            } else {
               user.save();
                return res.status(201).json({
                    success: true,
                    message: "User registered successfully and email sent"
                });
            }
        });
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};


export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
   
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
  
    
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Successful login
      return res.status(200).json({
        success: true,
        message: "Login successful",
        token
      });
  
    } catch (error) {
      return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  
