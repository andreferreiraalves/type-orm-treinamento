import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Lesson from "./Lesson";

@Entity()
export class Class {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    duracao: number;

    @CreateDateColumn({ name: 'created_At' })
    created_At: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updated_At: Date;

    @OneToMany(type => Lesson, classe => Class)
    lessons: Lesson[];
}