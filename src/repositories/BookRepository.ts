import { model, Model, DocumentQuery } from 'mongoose';
import { BookContract } from './contracts/BookContract';
import { BookModel } from '../models/BookModel';
import { Book } from '../types/Book';

export class BookRepository implements BookContract {
  /**
   * The model instance
   *
   * @type {Model<Book>}
   */
  private readonly book: Model<Book> = model<Book>('Book', BookModel);

  /**
   * Get all data
   *
   * @returns {DocumentQuery<Book[], Book>}
   */
  public getAllBook(): DocumentQuery<Book[], Book> {
    return this.book.find().populate('article');
  }

  /**
   * Get data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Book | null, Book>}
   */
  public getBookById(id: string): DocumentQuery<Book | null, Book> {
    return this.book.findById(id).populate('article');
  }

  /**
   * Insert data
   *
   * @param {Book} params
   * @returns {Promise<Book>}
   */
  public insertBook(params: Book): Promise<Book> {
    return this.book.create(params);
  }

  /**
   * Update data by id
   *
   * @param {string} id
   * @param {Book} params
   * @returns {DocumentQuery<Book | null, Book>}
   */
  public updateBook(
    id: string,
    params: Book,
  ): DocumentQuery<Book | null, Book> {
    return this.book.findByIdAndUpdate(id, params);
  }

  /**
   * Delete data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Book | null, Book>}
   */
  public deleteBook(id: string): DocumentQuery<Book | null, Book> {
    return this.book.findByIdAndRemove(id);
  }
}
