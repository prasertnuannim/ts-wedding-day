// utils/verifyToken.ts

import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export function verifyToken(authorization: string) {
  const authHeader = authorization;
  if (!authHeader) {
    throw new Error('No token provided');
  }

  try {
    jwt.verify(authHeader, SECRET_KEY);
    return true;
  } catch (err) {
    throw new Error('Invalid token');
  }
}
