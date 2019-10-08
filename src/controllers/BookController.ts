import * as joi from 'joi';
import { Request, Response } from 'express';
import { BookRepository } from '../repositories/BookRepository';
import { BookRequest } from '../requests/BookRequest';
import { Controller } from './Controller';
import { DataNotFoundException } from '../exceptions/DataNotFoundException';
import { InsertFailedException } from '../exceptions/InsertFailedException';
import { UpdateFailedException } from '../exceptions/UpdateFailedException';
import { DeleteFailedException } from '../exceptions/DeleteFailedException';

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
      const data = await this.book.getBookById(req.params.id);
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
      const data = await this.book.insertBook(
        await joi.validate(req.body, BookRequest.rules()),
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
      const data = await this.book.updateBook(
        req.params.id,
        await joi.validate(req.body, BookRequest.rules()),
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
      const data = await this.book.deleteBook(req.params.id);
      return res.json(data);
    } catch (err) {
      return res.status(400).json(new DeleteFailedException(err.message));
    }
  }
}
