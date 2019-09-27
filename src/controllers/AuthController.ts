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
  private user: UserRepository = new UserRepository();

  /**
   * Login user
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async login(req: Request, res: Response): Promise<Response> {
    try {
      await this.attemptLogin(req, res);
      return res.json({ token: this.getJwtToken(req) });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }

  /**
   * Register user
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async register(req: Request, res: Response): Promise<Response> {
    try {
      const store = await this.user.insertUser(req.body);
      return res.json(store);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  /**
   * Attempt login
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  protected async attemptLogin(
    req: Request,
    res: Response
  ): Promise<Response | boolean> {
    const login = await this.user.getUserByUsernameAndPassword(
      req.body.username,
      req.body.password
    );

    if (!login) {
      return res.status(401).json({ error: 'Invalid username and password' });
    }

    return true;
  }

  /**
   * Get jwt token
   *
   * @param {Request} req
   * @returns {string}
   */
  protected getJwtToken(req: Request): string {
    return jwt.sign(req.body, '123456', {
      algorithm: 'HS256',
      expiresIn: '1h'
    });
  }
}
