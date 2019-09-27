import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export class Authenticate {
  /**
   * Auth guard
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @returns {any}
   */
  public static guard = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void | boolean | Response => {
    try {
      const token: string = req.get('Authorization')!;
      return jwt.verify(token, '123456') ? next() : false;
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  };
}
