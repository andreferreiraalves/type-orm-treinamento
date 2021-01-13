import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Class } from './Class';
import Content from './Content';

@Entity()
export default class Lesson {

    @PrimaryColumn()
    id: number;

    @Column()
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updateAt: Date;

    @OneToOne(type => Content, lesson => Lesson)
    content: Content;

    @ManyToOne(type => Class, lessons => Lesson, { eager: true })
    classe: Class;
}