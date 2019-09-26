import { ArticleController } from '../controllers/ArticleController';
import { Application } from 'express';

export class ArticleRoute {
  /**
   * The controller instance
   *
   * @type {ArticleController}
   */
  private article: ArticleController = new ArticleController();

  /**
   * Bootstrap the routes
   *
   * @param {Application} app
   * @returns {void}
   */
  public routes(app: any): void {
    /**
     * GET /article
     */
    app.get('/article', this.article.index);

    /**
     * GET /article/:id
     */
    app.get('/article/:id', this.article.show);

    /**
     * POST /article
     */
    app.post('/article', this.article.store);

    /**
     * PUT /article/:id
     */
    app.put('/article/:id', this.article.update);

    /**
     * DELETE /article/:id
     */
    app.delete('/article/:id', this.article.destroy);
  }
}
