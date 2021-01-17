import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';
import { validate } from 'class-validator';

const studentCounter = Router();

studentCounter.post('/', async (request, response) => {
    try {
        const respo = getRepository(Student);

        const { key, name, email } = request.body;
        const student = respo.create({ key, name, email });
        const erros = await validate(student);

        if (erros.length != 0)
            return response.json(erros);

        const studentSaved = await respo.save(student);
        return response.status(201).json(studentSaved);
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