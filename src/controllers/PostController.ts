import * as joi from 'joi';
import { Request, Response } from 'express';
import { PostRepository } from '../repositories/PostRepository';
import { PostRequest } from '../requests/PostRequest';
import { Controller } from './Controller';
import { DataNotFoundException } from '../exceptions/DataNotFoundException';
import { InsertFailedException } from '../exceptions/InsertFailedException';
import { UpdateFailedException } from '../exceptions/UpdateFailedException';
import { DeleteFailedException } from '../exceptions/DeleteFailedException';

export class PostController extends Controller {
  /**
   * The repository instance
   *
   * @type {PostRepository}
   */
  private readonly post: PostRepository = new PostRepository();

  /**
   * Get all data in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.post.getAllPost();
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
      const data = await this.post.getPostById(req.params.id);
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
      const store = await this.post.insertPost(
        await joi.validate(req.body, PostRequest.rules()),
      );
      return res.status(201).json(store);
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
      const update = await this.post.updatePost(
        req.params.id,
        await joi.validate(req.body, PostRequest.rules()),
      );
      return res.json(update);
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
      const destroy = await this.post.deletePost(req.params.id);
      return res.json(destroy);
    } catch (err) {
      return res.status(400).json(new DeleteFailedException(err.message));
    }
  }
}
