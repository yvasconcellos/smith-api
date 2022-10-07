import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.body.token = decoded; 
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;