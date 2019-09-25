import { Article } from '../../types/Article';
import { DocumentQuery } from 'mongoose';

export interface ArticleContract {
  /**
   * Get all data
   *
   * @returns {DocumentQuery<Article[], Article>}
   */
  getAllArticle(): DocumentQuery<Article[], Article>;

  /**
   * Get data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Article | null, Article>}
   */
  getArticleById(id: string): DocumentQuery<Article | null, Article>;

  /**
   * Insert data
   *
   * @param {Article} params
   * @returns {Promise<Article>}
   */
  insertArticle(params: Article): Promise<Article>;

  /**
   * Update data by id
   *
   * @param {string} id
   * @param {Article} params
   * @returns {DocumentQuery<Article | null, Article>}
   */
  updateArticle(
    id: string,
    params: Article
  ): DocumentQuery<Article | null, Article>;

  /**
   * Delete data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<Article | null, Article>}
   */
  deleteArticle(id: string): DocumentQuery<Article | null, Article>;
}
