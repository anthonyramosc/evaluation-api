import { IsNotEmpty, IsNumber, Min, Max, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEvaluationDto {
  @ApiProperty({ description: 'ID del estudiante' })
  @IsNotEmpty()
  @IsNumber()
  studentId: number;

  @ApiProperty({ description: 'ID del curso' })
  @IsNotEmpty()
  @IsNumber()
  courseId: number;

  @ApiProperty({ description: 'Calificación (1-5)' })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ description: 'Comentario opcional' })
  @IsString()
  @MaxLength(500)
  comment?: string;
}