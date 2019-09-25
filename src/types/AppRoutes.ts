export interface IAppRoutes {
  /**
   * Method name
   *
   * @type {string}
   */
  method: string;

  /**
   * Route name
   *
   * @type {string}
   */
  route: string;

  /**
   * Controller name
   *
   * @type {function}
   */
  controller: Function;

  /**
   * Action name
   *
   * @type {string}
   */
  action: string;
}
