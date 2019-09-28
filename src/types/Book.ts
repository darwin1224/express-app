import { Document } from 'mongoose';
import { Article } from './Article';

export interface Book extends Document {
  /**
   * Title field
   *
   * @type {string}
   */
  title: string;

  /**
   * Article field
   *
   * @type {Article}
   */
  article: Article;
}
