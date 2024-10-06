import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); 

export const authMiddleware = (req, res, next) => {
  try {
 
    const token = req.header('Authorization')?.replace('Bearer ', '');
    // const token = req.header.authorization;

    if (!token) {
      return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }

  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

   
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Invalid token.' });
  }
};
