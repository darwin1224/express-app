import * as joi from 'joi';

export class AuthRequest {
  /**
   * Validate incoming request with the given rules.
   *
   * @returns {joi.ObjectSchema}
   */
  public static rules(): joi.ObjectSchema {
    return joi.object({
      username: joi
        .string()
        .min(4)
        .max(50)
        .required(),
      password: joi
        .string()
        .min(4)
        .required(),
    });
  }
}
