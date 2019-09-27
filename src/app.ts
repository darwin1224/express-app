import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import { PostRoute } from './routes/PostRoute';
import { ArticleRoute } from './routes/ArticleRoute';
import { AuthRoute } from './routes/AuthRoute';

class App {
  /**
   * Express instance
   *
   * @type {express.Application}
   */
  public app: express.Application = express();

  /**
   * Auth route instance
   *
   * @type {AuthRoute}
   */
  public readonly auth: AuthRoute = new AuthRoute();

  /**
   * Post route instance
   *
   * @type {PostRoute}
   */
  public readonly post: PostRoute = new PostRoute();

  /**
   * Article route instance
   *
   * @type {ArticleRoute}
   */
  public readonly article: ArticleRoute = new ArticleRoute();

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
    this.setRoutePath();
    this.listen();
  }

  /**
   * Bootstrap the app
   *
   * @returns {void}
   */
  protected init(): void {
    this.setUpCors();
    this.setUpBodyParser();
    this.setUpMorgan();
    this.setUpMongoDb();
  }

  /**
   * Set up cors
   *
   * @returns {void}
   */
  protected setUpCors(): void {
    this.app.use(cors());
  }

  /**
   * Set up body parser
   *
   * @returns {void}
   */
  protected setUpBodyParser(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
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
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
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
    this.setAuthRoute();
    this.setPostRoute();
    this.setArticleRoute();
  }

  /**
   * Set auth routes
   *
   * @type {void}
   */
  protected setAuthRoute(): void {
    this.auth.routes(this.app);
  }

  /**
   * Set post routes
   *
   * @returns {void}
   */
  protected setPostRoute(): void {
    this.post.routes(this.app);
  }

  /**
   * Set article routes
   *
   * @returns {void}
   */
  protected setArticleRoute(): void {
    this.article.routes(this.app);
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
