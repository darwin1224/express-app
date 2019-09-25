import { model, Model, DocumentQuery } from 'mongoose';
import { PostContract } from './contracts/PostContract';
import { PostModel } from '../models/PostModel';
import { Post } from '../types/Post';

export class PostRepository implements PostContract {
  /**
   * The model instance
   *
   * @type {Model<Post>}
   */
  private post: Model<Post> = model<Post>('Post', PostModel);

  /**
   * Get all data
   *
   * @returns {DocumentQuery<Post[], Post>}
   */
  public getAllPost(): DocumentQuery<Post[], Post> {
    return this.post.find();
  }

  /**
   * Get data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Post | null, Post>}
   */
  public getPostById(id: string): DocumentQuery<Post | null, Post> {
    return this.post.findById(id);
  }

  /**
   * Insert data
   *
   * @param {Post} params
   * @returns {Promise<Post>}
   */
  public insertPost(params: Post): Promise<Post> {
    return this.post.create(params);
  }

  /**
   * Update data by id
   *
   * @param {string} id
   * @param {Post} params
   * @returns {DocumentQuery<Post | null, Post>}
   */
  public updatePost(
    id: string,
    params: Post
  ): DocumentQuery<Post | null, Post> {
    return this.post.findByIdAndUpdate(id, params);
  }

  /**
   * Delete data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Post | null, Post>}
   */
  public deletePost(id: string): DocumentQuery<Post | null, Post> {
    return this.post.findByIdAndRemove(id);
  }
}
