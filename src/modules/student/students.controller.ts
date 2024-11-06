import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  HttpStatus,
  ParseIntPipe,
  Query
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { JSendInterceptor } from '../../common/jsend/jsend.interceptor';

@ApiTags('Estudiantes')
@Controller('students')
@UseInterceptors(JSendInterceptor)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo estudiante' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Estudiante creado exitosamente' })
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un estudiante por ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Estudiante encontrado' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.findOne(id);
  }

  @Get(':id/evaluations')
  @ApiOperation({ summary: 'Obtener evaluaciones de un estudiante' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Evaluaciones encontradas' })
  async findEvaluations(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.findEvaluations(id);
  }
}