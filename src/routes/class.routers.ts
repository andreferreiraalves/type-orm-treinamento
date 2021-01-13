import { Router } from 'express';
import { getCustomRepository, getRepository, Like } from 'typeorm';
import routes from '.';
import { Class } from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
    try {
        const respo = getRepository(Class);
        const res = await respo.save(request.body);
        return response.status(201).json(res);
    } catch (error) {
        console.log('error.message => ' + error.message);
        return response.status(400).send();
    }
});

classRouter.get('/', async (request, response) => {
    const repo = getRepository(Class);
    response.json(await repo.find());
});

classRouter.get('/:name', async (request, response) => {
    const repo = getCustomRepository(ClassRepository);
    const retorno = await repo.findByName(request.params.name);
    response.json(retorno);
});

export default classRouter;