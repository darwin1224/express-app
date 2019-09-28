import { Book } from '../../types/Book';
import { DocumentQuery } from 'mongoose';

export interface BookContract {
  /**
   * Get all data
   *
   * @returns {DocumentQuery<Book[], Book>}
   */
  getAllBook(): DocumentQuery<Book[], Book>;

  /**
   * Get data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Book | null, Book>}
   */
  getBookById(id: string): DocumentQuery<Book | null, Book>;

  /**
   * Insert data
   *
   * @param {Book} params
   * @returns {Promise<Book>}
   */
  insertBook(params: Book): Promise<Book>;

  /**
   * Update data by id
   *
   * @param {string} id
   * @param {Book} params
   * @returns {DocumentQuery<Book | null, Book>}
   */
  updateBook(id: string, params: Book): DocumentQuery<Book | null, Book>;

  /**
   * Delete data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Book | null, Book>}
   */
  deleteBook(id: string): DocumentQuery<Book | null, Book>;
}
