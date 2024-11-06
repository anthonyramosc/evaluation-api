import { Controller, Get, Post, Body, Param, UseInterceptors,
  HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { JSendInterceptor } from '../../common/jsend/jsend.interceptor';

@ApiTags('Evaluaciones')
@Controller('evaluations')
@UseInterceptors(JSendInterceptor)
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva evaluación' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Evaluación creada exitosamente' })
  async create(@Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationsService.create(createEvaluationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una evaluación por ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Evaluación encontrada' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.evaluationsService.findOne(id);
  }
}