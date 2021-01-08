import { Router } from 'express';
import { getRepository, Like } from 'typeorm';
import routes from '.';
import { Class } from '../models/Class';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
    try {
        const respo = getRepository(Class);
        const res = await respo.save(request.body);
        return response.status(201).json(res);
    } catch (error) {
        console.log('error.message => ' + error.message);
    }
});

classRouter.get('/', async (request, response) => {
    const repo = getRepository(Class);
    response.json(await repo.find());
});

classRouter.get('/:name', async (request, response) => {
    const repo = getRepository(Class);
    const retorno = await repo.find({
        where: {
            name: Like(request.params.name)
        }
    });

    response.json(retorno);
});

export default classRouter;