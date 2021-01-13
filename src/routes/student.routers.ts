import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';

const studentCounter = Router();

studentCounter.post('/', async (request, response) => {
    try {
        const respo = getRepository(Student);
        const res = await respo.save(request.body);
        return response.status(201).json(res);
    } catch (error) {
        console.log('error.message => ' + error.message);
        return response.status(400).send();
    }
});

studentCounter.get('/', async (request, response) => {
    const repo = getRepository(Student);
    response.json(await repo.find());
});

export default studentCounter;