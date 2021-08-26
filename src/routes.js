import { Router }  from 'express'; //Extraindo um objeto da biblioteca Router do express
import UserController from './app/controller/UserController';


const routes = new Router();

routes.post('/user', UserController.store);


export default routes;