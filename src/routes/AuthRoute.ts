import { AuthController } from '../controllers/AuthController';
import { Application, Request, Response } from 'express';

export class AuthRoute {
  /**
   * The controller instance
   *
   * @type {AuthController}
   */
  public auth: AuthController = new AuthController();

  /**
   * Bootstrap the routes
   *
   * @param {Application} app
   * @returns {void}
   */
  public routes(app: Application): void {
    /**
     * POST /auth/login
     */
    app.post('/auth/login', (req: Request, res: Response): void => {
      this.auth.login(req, res);
    });

    /**
     * POST /auth/register
     */
    app.post('/auth/register', (req: Request, res: Response): void => {
      this.auth.register(req, res);
    });
  }
}
