import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  studentId: string;

  @OneToMany(() => Evaluation, evaluation => evaluation.student)
  evaluations: Evaluation[];
}