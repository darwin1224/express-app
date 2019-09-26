import * as joi from 'joi';
import { Request, Response } from 'express';
import { PostRepository } from '../repositories/PostRepository';
import { PostRequest } from '../requests/PostRequest';
import { Controller } from './Controller';

export class PostController extends Controller {
  /**
   * The repository instance
   *
   * @type {PostRepository}
   */
  private post: PostRepository = new PostRepository();

  /**
   * Get all data in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async index(req: Request, res: Response): Promise<Response> {
    const data = await this.post.getAllPost();
    return data
      ? res.json(data)
      : res.status(400).json({ error: 'Failed to get data' });
  }

  /**
   * Get data by id from storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async show(req: Request, res: Response): Promise<Response> {
    const data = await this.post.getPostById(req.params.id);
    return data
      ? res.json(data)
      : res.status(404).json({ error: 'Data not found' });
  }

  /**
   * Insert data in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async store(req: Request, res: Response): Promise<any> {
    try {
      const data = await this.post.insertPost(
        await joi.validate(req.body, PostRequest.rules())
      );
      return data
        ? res.status(201).json(data)
        : res.status(400).json({ error: 'Failed to insert data' });
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
      const data = await this.post.updatePost(
        req.params.id,
        await joi.validate(req.body, PostRequest.rules())
      );
      return data
        ? res.json(data)
        : res.status(400).json({ error: 'Failed to update data' });
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
    const data = await this.post.deletePost(req.params.id);
    return data
      ? res.json(data)
      : res.status(400).json({ error: 'Failed to delete data' });
  }
}
