import { Router } from 'express';
import { getRepository } from 'typeorm';

import Lesson from '../models/Lesson';

const lessonCounter = Router();

lessonCounter.post('/', async (request, response) => {
    try {
        const respo = getRepository(Lesson);

        console.log(request.body);
        const res = await respo.save(request.body);
        return response.status(201).json(res);
    } catch (error) {
        console.log('error.message => ' + error.message);
        return response.status(400).send();
    }
});

lessonCounter.get('/', async (request, response) => {
    const repo = getRepository(Lesson);
    response.json(await repo.find());
});

export default lessonCounter;