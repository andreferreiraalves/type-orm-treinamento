import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column()
    duracao: number;

    @CreateDateColumn({ name: 'created_At' })
    created_At: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updated_At: Date;
}