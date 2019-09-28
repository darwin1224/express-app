import * as joi from 'joi';
import { Request, Response } from 'express';
import { BookRepository } from '../repositories/BookRepository';
import { BookRequest } from '../requests/BookRequest';
import { Controller } from './Controller';

export class BookController extends Controller {
  /**
   * The repository instance
   *
   * @type {BookRepository}
   */
  private readonly book: BookRepository = new BookRepository();

  /**
   * Get all data in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.book.getAllBook();
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
      const data = await this.book.getBookById(req.params.id);
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
      const data = await this.book.insertBook(
        await joi.validate(req.body, BookRequest.rules()),
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
      const data = await this.book.updateBook(
        req.params.id,
        await joi.validate(req.body, BookRequest.rules()),
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
      const data = await this.book.deleteBook(req.params.id);
      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
