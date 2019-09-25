import { Document } from 'mongoose';

export interface Post extends Document {
  /**
   * Title field
   *
   * @type {string}
   */
  title: string;

  /**
   * Body field
   *
   * @type {string}
   */
  body: string;
}
