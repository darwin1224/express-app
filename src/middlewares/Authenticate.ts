import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  try {
    jwt.verify(req.query.token, '123456');
    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};
