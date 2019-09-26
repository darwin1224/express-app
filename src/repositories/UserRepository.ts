import { model, Model, DocumentQuery } from 'mongoose';
import { User } from '../types/User';
import { UserModel } from '../models/UserModel';

export class UserRepository {
  /**
   * The model instance
   *
   * @type {Model<User>}
   */
  public user: Model<User> = model<User>('User', UserModel);

  /**
   * Get all data
   *
   * @returns {DocumentQuery<User[], User>}
   */
  public getAllUser(): DocumentQuery<User[], User> {
    return this.user.find();
  }

  /**
   * Get data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<User | null, User>}
   */
  public getUserById(id: string): DocumentQuery<User | null, User> {
    return this.user.findById(id);
  }

  /**
   * Get data by username and password
   *
   * @param {string} username
   * @param {string} password
   * @returns {DocumentQuery<User | null, User>}
   */
  public getUserByUsernameAndPassword(
    username: string,
    password: string
  ): DocumentQuery<User | null, User> {
    return this.user.findOne({ username, password });
  }

  /**
   * Insert data
   *
   * @param {User} params
   * @returns {Promise<User>}
   */
  public insertUser(params: User): Promise<User> {
    return this.user.create(params);
  }

  /**
   * Update data by id
   *
   * @param {string} id
   * @param {User} params
   * @returns {DocumentQuery<User | null, User>}
   */
  public updateUser(
    id: string,
    params: User
  ): DocumentQuery<User | null, User> {
    return this.user.findByIdAndUpdate(id, params);
  }

  /**
   * Delete data by id
   *
   * @param {string} id
   * @returns {DocumentQuery<User | null, User>}
   */
  public deleteUser(id: string): DocumentQuery<User | null, User> {
    return this.user.findByIdAndRemove(id);
  }
}
