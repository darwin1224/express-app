import * as joi from 'joi';
import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories/ArticleRepository';
import { PostRequest } from '../requests/PostRequest';
import { Controller } from './Controller';

export class ArticleController extends Controller {
  /**
   * The repository instance
   *
   * @type {ArticleRepository}
   */
  private article: ArticleRepository = new ArticleRepository();

  /**
   * Get all data in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.article.getAllArticle();
      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  /**
   * Get data by id from storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.article.getArticleById(req.params.id);
      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  /**
   * Insert data in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.article.insertArticle(
        await joi.validate(req.body, PostRequest.rules())
      );
      return res.status(201).json(data);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  /**
   * Update data by id from storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.article.updateArticle(
        req.params.id,
        await joi.validate(req.body, PostRequest.rules())
      );
      return res.json(data);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  /**
   * Delete data by id from storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.article.deleteArticle(req.params.id);
      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
