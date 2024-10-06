import bcrypt from 'bcrypt'
import userSchema from '../Models/userSchema';

export const register = async(req,res)=>{
    try {
        const{ fullname, email , password , activeState} = req.body;
        if (!fullname || !email || !password || activeState === undefined) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }

     const hashPassword = await bcrypt.hash(password, 10);

    const user = new userSchema({
        fullname,
        email,
        password : hashPassword,
        activeState
    });

    await user.save();

        
        return res.status(201).json({
            success: true,
            message: "User registered successfully"
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }

    

}