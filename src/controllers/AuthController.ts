import * as jwt from 'jsonwebtoken';
import * as joi from 'joi';
import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { Controller } from './Controller';
import { AuthRequest } from '../requests/AuthRequest';

export class AuthController extends Controller {
  /**
   * The repository instance
   *
   * @type {UserRepository}
   */
  private readonly user: UserRepository = new UserRepository();

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
    try {
      const value = await this.validateLogin(req);

      if (
        !(await this.user.getUserByUsernameAndPassword(
          value.username,
          value.password
        ))
      ) {
        return res.status(401).json({ error: 'Invalid username and password' });
      }

      return true;
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  /**
   * Validate login fields
   *
   * @param {Request} req
   * @returns {joi.ValidationResult<{ username: string; password: string }>}
   */
  protected validateLogin(
    req: Request
  ): joi.ValidationResult<{ username: string; password: string }> {
    return joi.validate(
      { username: req.body.username, password: req.body.password },
      AuthRequest.rules()
    );
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
