import { Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content';

const contentCounter = Router();

contentCounter.post('/', async (request, response) => {
    try {
        const respo = getRepository(Content);
        const res = await respo.save(request.body);
        return response.status(201).json(res);
    } catch (error) {
        console.log('error.message => ' + error.message);
        return response.status(400).send();
    }
});

contentCounter.get('/', async (request, response) => {
    const repo = getRepository(Content);
    response.json(await repo.find());
});

export default contentCounter;