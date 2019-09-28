import { Schema } from 'mongoose';

export const BookModel: Schema = new Schema({
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
   * Article relationship
   *
   * @type {{ type: Schema.Types.ObjectId }}
   */
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
    default: null,
  },

  /**
   * Created at field
   *
   * @type {{ type: Date, default: Date }}
   */
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
