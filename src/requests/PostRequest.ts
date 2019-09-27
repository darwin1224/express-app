import * as joi from 'joi';

export class PostRequest {
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
      body: joi
        .string()
        .min(4)
        .required(),
    });
  }
}
