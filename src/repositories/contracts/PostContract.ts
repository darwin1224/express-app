import { Post } from 'types/Post';
import { DocumentQuery } from 'mongoose';

export interface PostContract {
  /**
   * Get all data
   *
   * @returns {DocumentQuery<Post[], Post, {}>}
   */
  getAllPost(): DocumentQuery<Post[], Post, {}>;

  /**
   * Get data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Post | null, Post, {}>}
   */
  getPostById(id: string): DocumentQuery<Post | null, Post, {}>;

  /**
   * Insert data
   *
   * @param {Post} params
   * @returns {Promise<Post>}
   */
  insertPost(params: Post): Promise<Post>;

  /**
   * Update data by id
   *
   * @param {string} id
   * @param {Post} params
   * @returns {DocumentQuery<Post | null, Post, {}>}
   */
  updatePost(id: string, params: Post): DocumentQuery<Post | null, Post, {}>;

  /**
   * Delete data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Post | null, Post, {}>}
   */
  deletePost(id: string): DocumentQuery<Post | null, Post, {}>;
}
