import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentsRepository.create(createStudentDto);
    return await this.studentsRepository.save(student);
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentsRepository.findOne({
      where: { id }
    });

    if (!student) {
      throw new NotFoundException(`Estudiante #${id} no encontrado`);
    }

    return student;
  }

  async findEvaluations(id: number) {
    const student = await this.studentsRepository.findOne({
      where: { id },
      relations: ['evaluations']
    });

    if (!student) {
      throw new NotFoundException(`Estudiante #${id} no encontrado`);
    }

    return student.evaluations;
  }
}
