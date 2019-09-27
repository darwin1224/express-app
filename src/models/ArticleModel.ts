import { Schema } from 'mongoose';

export const ArticleModel: Schema = new Schema({
  /**
   * Title field
   *
   * @type {{ type: string, required: boolean, maxLength: number }}
   */
  title: {
    type: String,
    required: true,
    maxlength: 50,
  },

  /**
   * Body field
   *
   * @type {{ type: string }}
   */
  body: {
    type: String,
  },
});
