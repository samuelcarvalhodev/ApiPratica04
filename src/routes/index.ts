import express, { Router } from 'express';
import CarroController from '../controllers/CarroController';


const routes = Router();

routes.post('/carro/', CarroController.add);
routes.get('/carro/', CarroController.getAllActive);
routes.get('/carro/quantidade/:qtd', CarroController.getByQtd);
routes.get('/carro/:id', CarroController.getById);
routes.get('/carro/brand/:brand', CarroController.getByBrand);
routes.put('/carro/:id', CarroController.update);
routes.delete('/carro/:id', CarroController.delete);

export default routes;