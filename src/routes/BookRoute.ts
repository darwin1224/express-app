import { BookController } from '../controllers/BookController';
import { Application, Request, Response } from 'express';
import { Authenticate } from '../middlewares/Authenticate';

export class BookRoute {
  /**
   * The controller instance
   *
   * @type {BookController}
   */
  private readonly book: BookController = new BookController();

  /**
   * Bootstrap the routes
   *
   * @param {Application} app
   * @returns {void}
   */
  public routes(app: Application): void {
    /**
     * GET /book
     */
    app.get(
      '/book',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.book.index(req, res);
      },
    );

    /**
     * GET /book/:id
     */
    app.get(
      '/book/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.book.show(req, res);
      },
    );

    /**
     * POST /book
     */
    app.post(
      '/book',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.book.store(req, res);
      },
    );

    /**
     * PUT /book/:id
     */
    app.put(
      '/book/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.book.update(req, res);
      },
    );

    /**
     * DELETE /book/:id
     */
    app.delete(
      '/book/:id',
      Authenticate.guard,
      (req: Request, res: Response): void => {
        this.book.destroy(req, res);
      },
    );
  }
}
