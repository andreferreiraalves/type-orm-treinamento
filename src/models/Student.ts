import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Class } from './Class';
import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export default class Estudent {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @MaxLength(50)
    @MinLength(2)
    name: string;

    @Column()
    @Max(9999)
    @Min(3)
    key: string;

    @Column()
    @IsEmail()
    email: string;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updateAt: Date;

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class[];
}