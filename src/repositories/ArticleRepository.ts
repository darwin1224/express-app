import { model, Model, DocumentQuery } from 'mongoose';
import { ArticleContract } from './contracts/ArticleContract';
import { ArticleModel } from '../models/ArticleModel';
import { Article } from '../types/Article';

export class ArticleRepository implements ArticleContract {
  /**
   * The model instance
   *
   * @type {Model<Article>}
   */
  private article: Model<Article> = model<Article>('Article', ArticleModel);

  /**
   * Get all data
   *
   * @returns {DocumentQuery<Article[], Article>}
   */
  public getAllArticle(): DocumentQuery<Article[], Article> {
    return this.article.find();
  }

  /**
   * Get data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Article | null, Article>}
   */
  public getArticleById(id: string): DocumentQuery<Article | null, Article> {
    return this.article.findById(id);
  }

  /**
   * Insert data
   *
   * @param {Article} params
   * @returns {Promise<Article>}
   */
  public insertArticle(params: Article): Promise<Article> {
    return this.article.create(params);
  }

  /**
   * Update data by id
   *
   * @param {string} id
   * @param {Article} params
   * @returns {DocumentQuery<Article | null, Article>}
   */
  public updateArticle(
    id: string,
    params: Article
  ): DocumentQuery<Article | null, Article> {
    return this.article.findByIdAndUpdate(id, params);
  }

  /**
   * Delete data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Article | null, Article>}
   */
  public deleteArticle(id: string): DocumentQuery<Article | null, Article> {
    return this.article.findByIdAndRemove(id);
  }
}
