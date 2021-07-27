import express, { Router } from 'express';
import path from 'path';
import UserController from '../controllers/UserController';


const routes = Router();

routes.post('/user/', UserController.add);
routes.get('/user/', UserController.getAll);

export default routes;