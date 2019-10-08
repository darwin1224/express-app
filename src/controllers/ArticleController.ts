import * as joi from 'joi';
import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories/ArticleRepository';
import { ArticleRequest } from '../requests/ArticleRequest';
import { Controller } from './Controller';
import { DataNotFoundException } from '../exceptions/DataNotFoundException';
import { InsertFailedException } from '../exceptions/InsertFailedException';
import { UpdateFailedException } from '../exceptions/UpdateFailedException';
import { DeleteFailedException } from '../exceptions/DeleteFailedException';

export class ArticleController extends Controller {
  /**
   * The repository instance
   *
   * @type {ArticleRepository}
   */
  private readonly article: ArticleRepository = new ArticleRepository();

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
      return res.status(400).json(new DataNotFoundException(err.message));
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
      return res.status(400).json(new DataNotFoundException(err.message));
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
        await joi.validate(req.body, ArticleRequest.rules()),
      );
      return res.status(201).json(data);
    } catch (err) {
      return res.status(400).json(new InsertFailedException(err.message));
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
        await joi.validate(req.body, ArticleRequest.rules()),
      );
      return res.json(data);
    } catch (err) {
      return res.status(400).json(new UpdateFailedException(err.message));
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
      return res.status(400).json(new DeleteFailedException(err.message));
    }
  }
}
