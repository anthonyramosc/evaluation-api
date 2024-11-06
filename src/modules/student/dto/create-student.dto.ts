import { IsNotEmpty, IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({ description: 'Nombre del estudiante' })
  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty({ description: 'Correo electrónico del estudiante' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Número de matrícula del estudiante' })
  @IsString()
  @Length(5, 20)
  studentId: string;
}