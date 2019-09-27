import { ArticleController } from '../controllers/ArticleController';
import { Application, Request, Response } from 'express';
import { Authenticate } from '../middlewares/Authenticate';

export class ArticleRoute {
  /**
   * The controller instance
   *
   * @type {ArticleController}
   */
  private readonly article: ArticleController = new ArticleController();

  /**
   * Bootstrap the routes
   *
   * @param {Application} app
   * @returns {void}
   */
  public routes(app: Application): void {
    /**
     * GET /article
     */
    app.get(
      '/article',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.article.index(req, res);
      },
    );

    /**
     * GET /article/:id
     */
    app.get(
      '/article/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.article.show(req, res);
      },
    );

    /**
     * POST /article
     */
    app.post(
      '/article',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.article.store(req, res);
      },
    );

    /**
     * PUT /article/:id
     */
    app.put(
      '/article/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.article.update(req, res);
      },
    );

    /**
     * DELETE /article/:id
     */
    app.delete(
      '/article/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.article.destroy(req, res);
      },
    );
  }
}
