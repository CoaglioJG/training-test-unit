import { IsOptional, IsString } from 'class-validator';
import { Classroom } from 'src/domain/modules/entities/classroom';

export abstract class StudentDto {
  @IsString()
  name: string;

  @IsString()
  RA: string;

  @IsOptional()
  classroom: Partial<Classroom>;
}
