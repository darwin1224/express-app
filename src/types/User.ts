import { Document } from 'mongoose';

export interface User extends Document {
  /**
   * Name field
   *
   * @type {string}
   */
  name: string;

  /**
   * Username field
   *
   * @type {string}
   */
  username: string;

  /**
   * Password field
   *
   * @type {string}
   */
  password: string;
}
