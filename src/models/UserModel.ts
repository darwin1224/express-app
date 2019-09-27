import { Schema } from 'mongoose';

export const UserModel: Schema = new Schema({
  /**
   * Name field
   *
   * @type {{ type: string, required: boolean, maxLength: number }}
   */
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },

  /**
   * Username field
   *
   * @type {{type: string, required: boolean, maxLength: number }}
   */
  username: {
    type: String,
    required: true,
    maxlength: 100,
  },

  /**
   * Password field
   *
   * @type {{ type: string, required: boolean }}
   */
  password: {
    type: String,
    required: true,
  },
});
