import { PostController } from '../controllers/PostController';
import { Application, Request, Response } from 'express';
import { Authenticate } from '../middlewares/Authenticate';

export class PostRoute {
  /**
   * The controller instance
   *
   * @type {PostController}
   */
  private post: PostController = new PostController();

  /**
   * Bootstrap the routes
   *
   * @param {Application} app
   * @returns {void}
   */
  public routes(app: Application): void {
    /**
     * GET /post
     */
    app.get(
      '/post',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.post.index(req, res);
      }
    );

    /**
     * GET /post/:id
     */
    app.get(
      '/post/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.post.show(req, res);
      }
    );

    /**
     * POST /post
     */
    app.post(
      '/post',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.post.store(req, res);
      }
    );

    /**
     * PUT /post/:id
     */
    app.put(
      '/post/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.post.update(req, res);
      }
    );

    /**
     * DELETE /post/:id
     */
    app.delete(
      '/post/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.post.destroy(req, res);
      }
    );
  }
}
