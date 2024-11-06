import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';

@Injectable()
export class EvaluationsService {
  constructor(
    @InjectRepository(Evaluation)
    private evaluationsRepository: Repository<Evaluation>,
  ) {}

  async create(createEvaluationDto: CreateEvaluationDto): Promise<Evaluation> {
    const evaluation = this.evaluationsRepository.create(createEvaluationDto);
    return await this.evaluationsRepository.save(evaluation);
  }

  async findOne(id: number): Promise<Evaluation> {
    const evaluation = await this.evaluationsRepository.findOne({
      where: { id },
      relations: ['student']
    });

    if (!evaluation) {
      throw new NotFoundException(`Evaluación #${id} no encontrada`);
    }

    return evaluation;
  }
}
