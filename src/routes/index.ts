import { IAppRoutes } from 'types/AppRoutes';
import { PostController } from '../controllers/PostController';
import { ArticleController } from '../controllers/ArticleController';

/**
 * App routes
 *
 * @type {{ method: string, route: string, controller: function, action: string }[]}
 */
export const AppRoutes: IAppRoutes[] = [
  {
    method: 'get',
    route: '/post',
    controller: PostController,
    action: 'index'
  },
  {
    method: 'get',
    route: '/post/:id',
    controller: PostController,
    action: 'show'
  },
  {
    method: 'post',
    route: '/post',
    controller: PostController,
    action: 'store'
  },
  {
    method: 'put',
    route: '/post/:id',
    controller: PostController,
    action: 'update'
  },
  {
    method: 'delete',
    route: '/post/:id',
    controller: PostController,
    action: 'destroy'
  },
  {
    method: 'get',
    route: '/article',
    controller: ArticleController,
    action: 'index'
  },
  {
    method: 'get',
    route: '/article/:id',
    controller: ArticleController,
    action: 'show'
  },
  {
    method: 'post',
    route: '/article',
    controller: ArticleController,
    action: 'store'
  },
  {
    method: 'put',
    route: '/article/:id',
    controller: ArticleController,
    action: 'update'
  },
  {
    method: 'delete',
    route: '/article/:id',
    controller: ArticleController,
    action: 'destroy'
  }
];
