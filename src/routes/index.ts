import { Router } from 'express';
import classRouter from './class.routers';

const routes = Router();

routes.use('/class', classRouter);

export default routes;
