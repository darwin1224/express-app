export class DeleteFailedException extends Error {
  /**
   * Constructor
   *
   * @param {string} message
   * @returns {void}
   */
  public constructor(message: string) {
    super();

    /**
     * Name of the exception
     *
     * @type {string}
     */
    this.name = 'DeleteFailedException';

    /**
     * Exception message
     *
     * @type {strign}
     */
    this.message = message;
  }
}
