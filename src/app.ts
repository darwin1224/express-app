import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import { AppRoutes } from './routes';

class App {
  /**
   * Express instance
   *
   * @type {express.Application}
   */
  public app: express.Application = express();

  /**
   * Port number
   *
   * @type {number}
   */
  private readonly port: number = 3000;

  /**
   * Mongodb url
   *
   * @type {string}
   */
  private readonly mongoUrl: string = 'mongodb://database/express_test';

  /**
   * Constructor
   *
   * @returns {void}
   */
  public constructor() {
    this.init();
    this.listen();
  }

  /**
   * Bootstrap the app
   *
   * @returns {void}
   */
  protected init(): void {
    this.setUpBodyParser();
    this.setUpMorgan();
    this.setUpMongoDb();
    this.setRoutePath();
  }

  /**
   * Set up body parser
   *
   * @returns {void}
   */
  protected setUpBodyParser(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   * Set up morgan
   *
   * @returns {void}
   */
  protected setUpMorgan(): void {
    this.app.use(morgan('dev'));
  }

  /**
   * Set up mongo db
   *
   * @returns {void}
   */
  protected setUpMongoDb(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    mongoose.connection.once('open', (): void => {
      console.log(`Database is connected at ${this.mongoUrl}`);
    });
  }

  /**
   * Set route path
   *
   * @returns {void}
   */
  protected setRoutePath(): void {
    AppRoutes.forEach(route => {
      (this.app as any)[route.method](
        route.route,
        (req: express.Request, res: express.Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then(result =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });
  }

  /**
   * Serve the app
   *
   * @returns {void}
   */
  protected listen(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server is running at port ${this.port}`);
    });
  }
}

export default new App();
