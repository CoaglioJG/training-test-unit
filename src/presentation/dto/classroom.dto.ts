import { IsNumber, IsOptional, IsString } from 'class-validator';

export abstract class ClassroomDto {
  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsNumber()
  number: number;
}
