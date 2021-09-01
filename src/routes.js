import { Router }  from 'express'; //Extraindo um objeto da biblioteca Router do express
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

import authMiddleware from './app/middleware/auth'

const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.get('/getUser', authMiddleware, UserController.index);

export default routes;