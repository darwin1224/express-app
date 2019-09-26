import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { Controller } from './Controller';

export class AuthController extends Controller {
  /**
   * The repository instance
   *
   * @type {UserRepository}
   */
  public user: UserRepository = new UserRepository();

  /**
   * Login user
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async login(req: Request, res: Response): Promise<Response> {
    const data = await this.user.getUserByUsernameAndPassword(
      req.body.username,
      req.body.password
    );
    const token = jwt.sign(req.body, '123456', {
      algorithm: 'HS256',
      expiresIn: '1h'
    });
    return token
      ? res.json({ token: `Bearer ${token}` })
      : res.status(400).json({ error: 'Failed to get data' });
  }

  /**
   * Register user
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async register(req: Request, res: Response): Promise<Response> {
    const data = await this.user.insertUser(req.body);
    return data
      ? res.json(data)
      : res.status(400).json({ error: 'Failed to get data' });
  }
}
