import { Router } from 'express';
import classRouter from './class.routers';
import contentRouter from './content.routers';
import lessonRouter from './lesson.routers';
import studentRouter from './student.routers';

const routes = Router();

routes.use('/class', classRouter);
routes.use('/content', contentRouter);
routes.use('/lesson', lessonRouter);
routes.use('/student', studentRouter);

export default routes;
