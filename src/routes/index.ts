import { PostController } from '../controllers/PostController';

/**
 * App routes
 *
 * @type {{ method: string, route: string, controller: string, action: string }[]}
 */
export const AppRoutes = [
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
  }
];
