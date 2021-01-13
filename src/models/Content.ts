import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Lesson from './Lesson';

@Entity()
export default class Content {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    description: string;

    @Column()
    linkContent: string;

    @OneToOne(type => Lesson, content => Content)
    @JoinColumn()
    lesson: Lesson;
}