import * as joi from 'joi';

export class BookRequest {
  /**
   * Validate incoming request with the given rules.
   *
   * @returns {joi.ObjectSchema}
   */
  public static rules(): joi.ObjectSchema {
    return joi.object({
      title: joi
        .string()
        .min(4)
        .max(50)
        .required(),
      article: joi.string(),
    });
  }
}
