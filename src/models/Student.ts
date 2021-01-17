import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Class } from './Class';
import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export default class Estudent {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @MaxLength(50, { message: 'Um nome precisa ter no máximo 50 caracteres' })
    @MinLength(2, { message: 'Um nome precisa ter no mínimo 2 caracteres' })
    name: string;

    @Column()
    @Max(9999, { message: 'Key precisa possuir no máximo 9999 caracteres' })
    @Min(3, { message: 'Key precisa possuir no mínimo 2 caracteres' })
    key: string;

    @Column()
    @IsEmail({}, { message: 'Informe um e-mail válido' })
    email: string;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updateAt: Date;

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class[];
}